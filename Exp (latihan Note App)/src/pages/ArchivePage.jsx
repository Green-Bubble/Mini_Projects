import React from "react";
import { useSearchParams } from "react-router-dom";
import ExpList from "../components/ExpList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/utility";

const ArchivePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exps: getArchivedNotes(),
      keyword: this.props.defaultKeyword || "",
    };

    this.onKeywordChange = this.onKeywordChange.bind(this)
  }

  onKeywordChange(keyword){
    this.setState({keyword})
    this.props.keywordChange(keyword)
  }

  render() {
    const exps = this.state.exps.filter((exp) => exp.title.toLowerCase().includes(this.state.keyword.toLowerCase()))

    return (
      <section>
        <h2>Catatan Arsip</h2>
        <section className="search-bar">
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChange}/>
        </section>
        <ExpList exps={exps} />
      </section>
    );
  }
}

export default ArchivePageWrapper;
