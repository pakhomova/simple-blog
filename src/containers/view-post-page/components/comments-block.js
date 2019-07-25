import React, { Component } from 'react';
import CommentsList from './comments-list';

const commentsBlockStyle = { margin: 20 };

export default class CommentsBlock extends Component {
  render() {
    return (
      <div style={commentsBlockStyle}>
        <h3 className="ui grey header">Comments</h3>
        <CommentsList comments={this.props.comments} />
      </div>
    );
  }
}
