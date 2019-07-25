import React, { Component } from 'react';
import Comment from './comment';

export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <div className="ui divider" />
        {this.props.comments.map(comment => {
          return <Comment key={comment.id.toString()} {...comment} />;
        })}
      </div>
    );
  }
}
