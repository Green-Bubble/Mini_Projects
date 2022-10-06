import React from "react";
import { useSearchParams } from "react-router-dom";
import AddButton from "../components/AddButton";
import ExpList from "../components/ExpList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/utility";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>;
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exps: getActiveNotes(),
      keyword: this.props.defaultKeyword || "",
    };

    this.onKeywordChange = this.onKeywordChange.bind(this)
  }

  onKeywordChange(keyword){
    this.setState({keyword});
    this.props.keywordChange(keyword)
  }

  render() {
    const exps = this.state.exps.filter((exp) => exp.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
    
    return (
      <>
        <section className="homepage">
          <section className="search-bar">
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChange}/>
          </section>
          <ExpList exps={exps} />
        </section>
        <section className="homepage__action">
          <AddButton />
        </section>
      </>
    );
  }
}

export default HomePageWrapper;
