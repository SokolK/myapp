import React from 'react'

const Posts = (props) => {
    const { post } = props;
    const postList = post.map(Post => {
        return (
            <div className='Post' key={Post.id}>
                <h1>{Post.Title}</h1>
                <p>Posted by: {Post.UserName}</p>
                <p>{Post.Content}</p>
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