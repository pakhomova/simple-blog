import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../../actions/posts';
import Header from './components/header';
import PostsList from './components/posts-list';

class LatestPostsPage extends Component {
  componentDidMount() {
    this.props.postsFetchData('https://simple-blog-api.crew.red/posts');
  }

  render() {
    return (
      <div>
        <Header />
        <PostsList posts={this.props.posts} />
      </div>
    );
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
