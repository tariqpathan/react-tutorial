import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }    
    }
    
    incrementCounter() {
        this.setState((prevState) => ({
           count: prevState.count + 1
        }))
    }

    incrementFive() {
        for (let i=0; i<5; i++) {
            this.incrementCounter()
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={
                    () => this.incrementFive()
                }>
                    Click me, bitch
                </button>
            </div>
        )
    }
}

export default Counter