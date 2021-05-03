import React, { Component } from 'react'

class FormComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: 'hi'
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange(event) {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit(event) {
        alert(this.state.username);
        console.log("logged");
        console.log(event);
        event.preventDefault();
    }

    render() {
        const { username, comments } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea 
                        value={comments}
                        onChange={this.handleCommentChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormComponent