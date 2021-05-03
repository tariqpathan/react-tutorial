import React from 'react'

// function Greet() {
//     return <h1>Hello Tariq</h1>
// }

export const Greet = ({name, age}) => { //destructuring
    // alternate is const {name, age} = props in fn body
    return (
        <h1>Hello {name} you are {age}</h1>
    )
}
export default Greet