import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentPostsFetchData } from '../../actions/current-post';
import { postComment } from '../../actions/comment';
import Post from './components/post';
import CommentsBlock from './components/comments-block';

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
        {this.props.currentPost.comments && (
          <CommentsBlock postComment={this.props.postComment} currentPost={this.props.currentPost} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPost: state.currentPost.currentPost
});

const mapDispatchToProps = {
  currentPostsFetchData,
  postComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPostPage);
