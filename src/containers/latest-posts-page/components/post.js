import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';

export default class Post extends Component {
  render() {
    return (
      <div className="item">
        <Link to={routes.POSTS + '/' + this.props.id}>{this.props.title}</Link>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
