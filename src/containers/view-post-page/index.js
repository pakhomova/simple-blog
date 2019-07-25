import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentPostsFetchData } from '../../actions/current-post';
import Post from './components/post';
import CommentsBlock from './components/comments-block';

const comments = [
  { postId: 6, body: 'test', id: 2040 },
  { postId: 6, body: 'new', id: 2041 },
  { postId: 6, body: ':)', id: 2042 },
  { postId: 6, body: 'Amazing', id: 2043 },
  { postId: 6, body: 'clear', id: 2044 },
  { postId: 6, body: 'msg', id: 2051 }
];

class ViewPostPage extends Component {
  componentDidMount() {
    this.props.currentPostsFetchData(
      `https://simple-blog-api.crew.red/posts/${this.props.match.params.id}?_embed=comments`
    );
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading</div>;
    } else {
      console.log(this.props.currentPost.comments);
      return (
        <div>
          <Post title={this.props.currentPost.title} body={this.props.currentPost.body} />
          <CommentsBlock comments={comments} />
          {JSON.stringify(this.props.currentPost.comments)}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  currentPost: state.currentPost.currentPost,
  isLoading: state.currentPost.isLoading
});

const mapDispatchToProps = {
  currentPostsFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPostPage);
