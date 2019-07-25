import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentPostsFetchData } from '../../actions/current-post';
import Post from './components/post';
import Comment from './components/comment';

class ViewPostPage extends Component {
  componentDidMount() {
    this.props.currentPostsFetchData(
      `https://simple-blog-api.crew.red/posts/${this.props.match.params.id}?_embed=comments`
    );
  }

  render() {
    console.log(this.props.currentPost.comments);
    return (
      <div>
        <Post title={this.props.currentPost.title} body={this.props.currentPost.body} />
        <Comment comment={this.props.currentPost.comments[0]} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPost: state.currentPost.currentPost
});

const mapDispatchToProps = {
  currentPostsFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPostPage);
