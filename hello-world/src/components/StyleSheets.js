import React from 'react'
import '../myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`font-xl ${className}`}>Hello</h1>
        </div>
    )
}

// inline styling example
const style = {
    color: 'red',
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '10rem'

}

function Inline() {
    return (
        <div>
            <h1 style={style}>Inline</h1>
        </div>
    )
}

export default Inline