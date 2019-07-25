import React, { Component } from 'react';

const commentStyle = {
  color: 'grey'
};

export default class Comment extends Component {
  render() {
    return (
      <div style={commentStyle}>
        <p>{this.props.body}</p>
        <div className="ui divider" />
      </div>
    );
  }
}
