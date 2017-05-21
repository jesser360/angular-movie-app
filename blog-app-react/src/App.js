import React, { Component } from 'react';
import './App.css';
import Comment from './Comment'

class Post extends Component {

  constructor (props){
    super()
    this.state = {
      body : props.body
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let newBody = this.refs.bodyEdit.value
    console.log(newBody);
    this.setState({
      body:newBody
    })
    this.refs.bodyEdit.value ='';
    this.handleSubmit = this.handleSubmit.bind(this)
  }
render () {
  let commentList = this.props.comments.map((comment,index) => (
          <Comment bodyCom={comment} key={index}/>
      ));

    return (
    <div>
    <h1>Title:{this.props.title}</h1>
    <h3>written by:{this.props.author}</h3>
      <p>Blog Post:{this.state.body}</p>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <label>
      Edit Body:
      <input type="text" ref='bodyEdit' />
      </label>
      <input type="submit" value="Submit" />
      </form>
    <p>Comments:</p>
      {commentList}
    </div>
  );
}
}

export default Post;
