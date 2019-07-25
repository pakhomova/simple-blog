import React, { Component } from 'react';
import Comment from './comment';

export default class CommentsList extends Component {
  render() {
    return (
      <div className="ui fluid vertical menu">
        {this.props.comments.map(comment => (
          <Comment key={comment.id.toString()} {...comment} />
        ))}
      </div>
    );
  }
}
