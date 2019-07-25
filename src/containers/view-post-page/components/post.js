import React, { Component } from 'react';

const postStyle = {
  margin: 20
};

export default class Post extends Component {
  render() {
    return (
      <div style={postStyle}>
        <h2 className="ui header">{this.props.title}</h2>
        <div className="ui divider" />
        <p>{this.props.body}</p>
      </div>
    );
  }
}
