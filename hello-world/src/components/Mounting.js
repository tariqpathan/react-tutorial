import React, { Component } from 'react'
import MountingChildComponent from './MountingChild'

class MountingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Tariq'
        }
        console.log('Lifecycle A constructor')
        this.changeState = this.changeState.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A gDSFP')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A cDM')

    }

    shouldComponentUpdate() {
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle A getSnapshot")
        return null
    }

    componentDidUpdate() {
        console.log("Lifecycle A componentDidUpdate")
    }

    changeState() {
        this.setState({
            name: 'new'
        })
    }

    render () {
        console.log('Lifecycle A render')
        
        return (
            <div>
                Inside render method
                <MountingChildComponent />
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }

}

export default MountingComponent