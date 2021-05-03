import React, { PureComponent } from 'react'

class PureComponentExample extends PureComponent {
    render () {
        console.log('Pure Component Render')
        return (
            <div>
                Hello, I'm pure: {this.props.name}
            </div>
        )
    }
}

export default PureComponentExample