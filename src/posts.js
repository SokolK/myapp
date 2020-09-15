import React from 'react'
import AddComment from './components/comments/comments'

const Posts = (props) => {
    const { post } = props;
    const postList = post.map(Post => {
        return (
            <div className='Post' key={Post.id}>
                <h1>{Post.Title}</h1>
                <p>{Post.Content}</p>
                <p>Posted by: {Post.UserName}</p>
                <button onClick = {AddComment}>addComment</button>
            </div>
        )
    })
    return (
        <div className='Post-list'>
            {postList}
        </div>
    )
}

export default Posts