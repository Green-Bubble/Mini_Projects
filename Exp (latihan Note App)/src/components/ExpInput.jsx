import React from "react";
import DoneButton from "./DoneButton";

class ExpInput extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitHandler() {
    this.props.addNote({ title: this.state.title, body: this.state.body });
  }

  render() {
    return (
      <form>
        <div className="add-new-page__input">
          <input type="text" className="add-new-page__input__title" placeholder="Input Title" onChange={this.onTitleChange} />
          <div className="add-new-page__input__body" data-placeholder="Notes..." contentEditable onInput={this.onBodyChange}></div>
        </div>
        <div className="add-new-page__action">
          <DoneButton addNote={this.onSubmitHandler} />
        </div>
      </form>
    );
  }
}

export default ExpInput;
