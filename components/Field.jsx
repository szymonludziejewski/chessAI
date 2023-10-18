import React from 'react'
import Figure from './Figure'

export default function Field(props) {
    const colorStyle = {
        backgroundColor: props.fieldColor,
        color: props.pieceColor,
        width: "20px",
        height: "20px"
    }

    return (
        <div style={colorStyle}>
            <Figure piece={props.piece}></Figure>
        </div>
    )
}
