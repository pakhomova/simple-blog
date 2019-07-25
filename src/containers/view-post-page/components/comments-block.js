import React, { Component } from 'react';
import CommentsList from './comments-list';
import CommentAddForm from './comment-add-form';

const commentsBlockStyle = { margin: 20 };

export default class CommentsBlock extends Component {
  render() {
    return (
      <div style={commentsBlockStyle}>
        <h3 className="ui grey header">Comments</h3>
        <CommentAddForm postId={this.props.currentPost.id} postComment={this.props.postComment} />
        <CommentsList comments={this.props.currentPost.comments} />
      </div>
    );
  }
}
