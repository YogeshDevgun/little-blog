import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions';
import { deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount(){
    //Fetching posts once after DOM is rendered
    //this if condition is so that we don't have to re fetch
    //on every click if it is there in network alreeady it wont be refetched
    if(!this.props.post){
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    // posts[this.props.match.params.id];
    const { post } = this.props;
    if(!post){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <Link to="/"> &lt; Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {

  return { post: posts[ownProps.match.params.id] };
  // return { posts };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
