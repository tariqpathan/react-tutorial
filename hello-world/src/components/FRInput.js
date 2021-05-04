import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             Hello
//             <input type="text" />
//         </div>
//     )
// }

// we pass the functional component as an argument

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            Hello
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput