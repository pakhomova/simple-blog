import React, { Component } from 'react';
import CommentsList from './comments-list';

export default class CommentsBlock extends Component {
  render() {
    console.log(`From comments-block: ${this.props.comments}`);
    return <CommentsList comments={this.props.comments} />;
  }
}
