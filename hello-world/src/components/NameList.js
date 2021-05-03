import React from 'react'

function OldNameList() {
    const names = ['a', 'b', 'c']
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

function NameList() {
    const letters = ['d', 'e', 'f']
    const letterList = letters.map(letter => <h2>{letter}</h2>)

    return (
        <div>
            {letterList}
        </div>
    )
}

// good idea to refactor jsx into a separate component - see person.js
function ObjectList() {
    const persons = [
        {id: 1, name: 'Albert', age: 20},
        {id: 2, name: 'Bethany', age: 30},
        {id: 3, name: 'Charlie', age: 33},
    ]
    const personList = persons.map(
        person => <h2>I am {person.name} and my age is {person.age}</h2>)
}


export default NameList