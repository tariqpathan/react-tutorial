import React, { Component } from 'react'
import RegComponent from './RegularComponent'
import PureComponentExample from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tariq'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Tariq'
            })
        }, 1500)
    }

    render() {
        console.log('*************Parent Component Render*****************')
        return (
            <div>
                Parent Component
                {/* <RegComponent name={this.state.name} /> */}
                {/* <PureComponentExample name={this.state.name} /> */}
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent