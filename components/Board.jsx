import React from 'react'
import Field from './Field'

export default function Board() {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let color = "red";


    return (
        <tbody>
            {columns.map(column => {
                color = color === "red" ? "blue" : "red";
                return (
                    <tr>
                        {rows.map(row => {
                            color = color === "red" ? "blue" : "red";
                            return (
                                <td>
                                    <Field cordinates={`${column}${row}`} color={color}></Field>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}
