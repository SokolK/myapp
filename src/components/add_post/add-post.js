import React, { Component } from 'react'


class AddPost extends Component {
    state = {
        UserName: null,
        Content: null,
        Title: null,
        Comments: null
    }
    Update = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    Sbmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state)
    }
    render() {
        return (
            <div className="AddPost">
                <label htmlFor="UserName">UserName: </label>
                <textarea id="UserName" onChange={this.Update} />
                <label htmlFor="UserName">Content: </label>
                <textarea id="Content" onChange={this.Update} />
                <label htmlFor="UserName">Title: </label>
                <textarea id="Title" onChange={this.Update} />
                <button onClick={this.Sbmit}>Submit</button>
            </div>
        )
    }
}

export default AddPost