import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentPostsFetchData } from '../../actions/current-post';

class ViewPostPage extends Component {
  componentDidMount() {
    this.props.currentPostsFetchData(
      `https://simple-blog-api.crew.red/posts/${this.props.match.params.id}?_embed=comments`
    );
  }

  render() {
    return <div>Post ID: {this.props.match.params.id}</div>;
  }
}

const mapStateToProps = state => ({
  currentPost: JSON.stringify(state.currentPost.currentPost)
});

const mapDispatchToProps = {
  currentPostsFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPostPage);
