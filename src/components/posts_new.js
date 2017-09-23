import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

//redux-form will handle the states of this form

//this.renderTitleField have no paranthesis at extends
//means we are not calling it Field itself will calling
//this.renderTitleField() would have meant calling also.

  renderField(field) {
     return(
       <div className="form-group">
         <label>{field.label}</label>
           <input
             type="text"
             {...field.input}
           />
         {field.meta.error}
       </div>
     )
  }

  onSubmit(values){

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
})(PostsNew);
