import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState((prevState) => { return {count: prevState.count + 1} })
    }
    
    render () {
        const { count } = this.state
        return (
            <div>
                <h1>Hello!!</h1>
                <button onClick={this.clickHandler}>Clicked { count } Times</button>
            </div>
        )
    }
}

export default ClickCounter