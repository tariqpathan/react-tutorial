import React from 'react'

function MemoComponent({name}) {
    console.log('Rendering functional component')
    return (
        <div>
            Memo Hello {name}
        </div>
    )
}

export default React.memo(MemoComponent)