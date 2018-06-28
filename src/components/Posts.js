import React, { Component } from "react";

//Redux connect object
import { connect } from "react-redux";

//Actions
import { fetchPosts } from "../actions/postActions";



class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
      }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p> {post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Post Items</h1>
                {postItems}
            </div>
        );
    }
    
}
const mapStateToProps = state => ({
    posts: state.posts.items,
  });
  
  export default connect(mapStateToProps, { fetchPosts })(Posts);