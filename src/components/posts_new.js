import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostsNew extends Component {

//redux-form will handle the states of this form

//this.renderTitleField have no paranthesis at extends
//means we are not calling it Field itself will calling
//this.renderTitleField() would have meant calling also.

  renderField(field) {

    // const { meta } = field; //==field.meta
    const { meta: { touched, error }} = field;// touched = field.meta.touched
    const className = `form-group ${touched && error ? 'has-danger':''}`;
     return(
       <div className={className}>
         <label>{field.label}</label>
           <input
             className="form-control"
             type="text"
             {...field.input}
           />
         <div className="text-help">
         {touched ? error : ''}
        </div>
       </div>
     )
  }

  onSubmit(values){
    //To make redirection possible after post has been posted,
    //we will make a callback function.
    this.props.createPost(values,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}/>
          <Field
            label="Categories"
            name="categories"
            component={this.renderField } />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField } />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }
  if(!values.categories){
    errors.categories = 'Enter some categories';
  }
  if(!values.content){
    errors.content = 'Enter some content please';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
