import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = 'Welcome User'
        } else {
            message = 'Welcome Guest'
        }
        
        return (
            <div>
                <h1>{message}</h1>
            </div>
        )
        
    }
}

export default UserGreeting