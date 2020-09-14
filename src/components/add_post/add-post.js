import React, {Component} from 'react'


class AddPost extends Component {
    state = {
        UserName: null,
        Content: null,
        Title: null
    }
    Update = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    Sbmit = (e) =>{
        e.preventDefault();
        this.props.addPost(this.state)
    }
    render(){
        return(
        <div className="AddPost">
            <form>
                <label htmlFor="UserName">UserName: </label>
                <input type="text" id="UserName" onChange={this.Update}/>
                <label htmlFor="UserName">Content: </label>
                <input type="text" id="Content" onChange={this.Update}/>
                <label htmlFor="UserName">Title: </label>
                <input type="text" id="Title" onChange={this.Update}/>
                <button onClick={this.Sbmit}>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddPost