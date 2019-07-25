import React, { Component } from 'react';
import Post from './post';

export default class PostsList extends Component {
  render() {
    return (
      <div className="ui fluid vertical menu">
        {this.props.posts.map(post => (
          <Post key={post.id.toString()} {...post} />
        ))}
      </div>
    );
  }
}
