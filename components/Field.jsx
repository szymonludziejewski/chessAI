import React from 'react'

export default function Field(props) {
    const colorStyle = {
        color: props.color
    }
    return (
        <div style={colorStyle}>{props.cordinates}</div>
    )
}
