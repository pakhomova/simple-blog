import React, { Component } from 'react';

export default class CommentAddForm extends Component {
  state = { inputValue: '' };

  onInputChange = ev => this.setState({ inputValue: ev.target.value });

  validateForm = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      return true;
    }
    return false;
  };

  onButtonClick = () => {
    const newComment = { postId: this.props.postId, body: this.state.inputValue };
    console.log(newComment);
    this.props.postComment('https://simple-blog-api.crew.red/comments', newComment);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <input
            type="text"
            name="comment"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            placeholder="Enter comment text"
          />
        </div>
        <button className="ui button" onClick={this.onButtonClick} disabled={!this.validateForm()}>
          Add comment
        </button>
      </div>
    );
  }
}
