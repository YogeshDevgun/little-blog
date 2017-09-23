import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component{
  componentDidMount(){
    //Fetching posts once after DOM is rendered
    this.props.fetchPosts();
  }

  renderPosts(){
    // Object Map through lodash, this.props.posts.map work for arrays
    return _.map(this.props.posts, post =>{
      return(
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}


//For Application level State
//This posts is application state having value in index file of reducers and
// from there moves forward.
function mapStateToProps(state){
  return {posts: state.posts};
}

//action can be dispatched through mapDispatchToProps it cna be avoided and can be directly even
//by ES6 connect(state, action)(className)
export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);
