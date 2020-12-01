import React from 'react'

export default function WordColor({word, fontColor, bgColor}) {
    const style = {
        color: fontColor,
        backgroundColor: bgColor
    }
    return (
        <h1 style={style}>The word is: {word}</h1>
    )
}
