import React from 'react'
import Field from './Field'
import board from '../config/board.json'

export default function Board() {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const boardStartView = board.start;
    const colors = {
        whiteField: "#FFFFFF",
        blackField: "#000000",
        whitePiece: "#00FF00",
        blackPiece: "#FF0000"
    }
    const boardStyle={
        border: "solid"
    }
    let fieldColor = colors.whiteField;
    
    function changeFieldColor() {
        fieldColor = fieldColor === colors.whiteField ? colors.blackField : colors.whiteField;
    }

    function getPieceColor(field) {
        return field.toUpperCase() === field ? colors.whitePiece : colors.blackPiece;
    }

    function getKey() {
        return (Math.random() * (new Date().getTime())).toString()
    }


    return (
        <tbody style={boardStyle} key={getKey()}>
            {boardStartView.map(row => {
                changeFieldColor();
                return (
                    <tr key={getKey()}>
                        {row.map(field => {
                            changeFieldColor()
                            const pieceColor = getPieceColor(field);
                            return (
                                <td key={getKey()}>
                                    <Field piece={field} fieldColor={fieldColor} pieceColor={pieceColor}></Field>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>       
    )
}
