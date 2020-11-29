import React from 'react'

export default function Box({box}) {
    const boxStyle = {
        backgroundColor: box.color,
        width: box.width +"px",
        height: box.height +"px"
    }
    return (
        <div style={boxStyle}>
            
        </div>
    )
}
