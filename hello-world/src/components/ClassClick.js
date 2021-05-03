import React, { Component } from 'react'

class ClassClick extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message: 'hello',
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick = () => {
        this.setState({
            message: "Googbye"
        })
    }
    // handleClick() {
    //     console.log("clicked")
    //     this.setState({
    //         message: 'goodbye'
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={
                    this.handleClick
                }>
                    Click me, bitch
                </button>
            </div>
        )
    }
}

export default ClassClick