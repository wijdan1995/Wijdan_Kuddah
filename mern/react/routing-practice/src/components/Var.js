import React from 'react'
export default function Number({variable}) {
    return (
        <>
        {
            isNaN(variable) ? <h1>The word is: {variable} </h1>: <h1>The number is: {variable}</h1>
        }
        </>
    )
}
