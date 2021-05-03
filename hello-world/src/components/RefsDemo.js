import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null // creating a callback Ref #method 2
        // creating a method that assigns a DOM element to cbRef
        this.setCbRef = (element) => {
            this.cbRef = element
        } 
    }

    componentDidMount() {
        console.log(this.inputRef)
        // this.inputRef.current.focus()
        console.log()
        if (this.cbRef) { // check element exists as value is null if unmounted
            console.log(this.cbRef);
            this.cbRef.focus()
        }
    }



    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input name="cbrefInput" type="text" ref={this.setCbRef}/>

            </div>
        )
    }
}

export default RefsDemo