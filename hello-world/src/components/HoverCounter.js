import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.mouseOverHandler = this.mouseOverHandler.bind(this)
    }

    mouseOverHandler = () => {
        this.setState((prevState) => { return {count: prevState.count + 1} })
    }
    
    render () {
        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.mouseOverHandler}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter