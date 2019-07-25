import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div className="item">
        <p>{this.props.comment}</p>
      </div>
    );
  }
}
