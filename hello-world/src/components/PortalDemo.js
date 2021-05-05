import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            hello
            <h1>Portal Demo</h1>
        </div>, document.getElementById('portal-root')
    )
}

export default PortalDemo