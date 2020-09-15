import React, { Component } from 'react'
import AddPost from './components/add_post/add-post'
import Posts from './posts'

class Blog extends Component {
  addPost = (posts) =>{
    let post = [...this.state.post, posts]
    this.setState({
      post: post
    });
} 
  state = {
    post : [
    {UserName: "Prodigy", Content: "MOB", Title: "Shock ones", Comments: null}
  ]}
  render(){
  return (
    <div className='con'>
      <h1 className='wiz'>Blog</h1>
      <a href='/nav' className="blog2">Powrót</a>
        <AddPost addPost={this.addPost}/>
        <div className="tresc">
          <Posts post={this.state.post}/>
        </div>
    </div>
  )
}
}

export default Blog 