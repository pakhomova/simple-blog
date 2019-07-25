import React, { Component } from 'react';

const headerStyle = {
  margin: 20,
  textAlign: 'center'
};

export default class Header extends Component {
  render() {
    return (
      <h1 className="ui header" style={headerStyle}>
        Hi, this is Simple Blog!
      </h1>
    );
  }
}
