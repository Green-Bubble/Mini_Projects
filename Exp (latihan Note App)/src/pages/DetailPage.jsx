import React from "react";
import { useParams } from "react-router-dom";
import ArchiveButton from "../components/ArchiveButton";
import DeleteButton from "../components/DeleteButton";
import ExpDetail from "../components/ExpDetail";
import UnarchiveButton from "../components/UnarchiveButton";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/utility";

const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage id={id} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: getNote(this.props.id),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onUnarchiveEventHandler = this.onUnarchiveEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    deleteNote(id);
  }

  onArchiveEventHandler(id) {
    archiveNote(id);
  }

  onUnarchiveEventHandler(id) {
    unarchiveNote(id);
  }

  render() {
    if (this.state.exp !== undefined) {
      let toggleArchiveButton;
      if (this.state.exp.archived) {
        toggleArchiveButton = <UnarchiveButton id={this.props.id} onUnarchive={this.onUnarchiveEventHandler} />;
      } else {
        toggleArchiveButton = <ArchiveButton id={this.props.id} onArchive={this.onArchiveEventHandler} />;
      }

      return (
        <section className="detail-page">
          <ExpDetail {...this.state.exp} />
          <div className="detail-page__action">
            {toggleArchiveButton}
            <DeleteButton id={this.props.id} onDelete={this.onDeleteEventHandler} />
          </div>
        </section>
      );
    }
  }
}

export default DetailPageWrapper;
