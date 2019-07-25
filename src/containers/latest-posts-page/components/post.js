import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';

export default class Post extends Component {
  getShortText = text => {
    if (text.length > 130) {
      return text.slice(0, 131) + '...';
    }
    return text;
  };
  render() {
    return (
      <div className="item">
        <Link to={routes.POSTS + '/' + this.props.id}>{this.props.title}</Link>
        <p>{this.getShortText(this.props.body)}</p>
      </div>
    );
  }
}
