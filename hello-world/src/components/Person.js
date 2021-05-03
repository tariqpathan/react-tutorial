import React from 'react'

// good idea to refactor jsx into a separate component - see person.js

function ObjectList() {
    const persons = [
        {id: 1, name: 'Albert', age: 20},
        {id: 2, name: 'Bethany', age: 30},
        {id: 3, name: 'Charlie', age: 33},
    ]
    const personList = persons.map(person =>
        <Person key={person.id} person={person}></Person>
    )
    return <div>{personList}</div>
}

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name} and my age is {person.age}
            </h2>
        </div>
    )
}

export { ObjectList, Person }
// although I have exported both, I only need to export ObjectList
