import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../../actions/posts';

class LatestPostsPage extends Component {
  componentDidMount() {
    this.props.postsFetchData('https://simple-blog-api.crew.red/posts');
  }
  render() {
    console.log(this.props.posts);
    return <div>LatestPostsPage</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts.posts });

const mapDispatchToProps = {
  postsFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPostsPage);
