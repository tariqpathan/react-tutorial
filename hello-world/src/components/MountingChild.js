import React, { Component } from 'react'

class MountingChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Tariq'
        }
        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B gDSFP')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B cDM')

    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle B getSnapshot")
        return null
    }

    componentDidUpdate() {
        console.log("Lifecycle B componentDidUpdate")
    }
    render () {
        console.log('Lifecycle B render')
        
        return (
            <div>
                Inside child render method
            </div>
        )
    }

}

export default MountingChildComponent