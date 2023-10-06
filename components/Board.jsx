import React from 'react'
import Field from './Field'

export default function Board() {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

    return (
        <tbody>
            {columns.map(column => {
                return (
                    <tr>
                        {rows.map(row => {
                            return (
                                <td>
                                    <Field cordinates={`${column}${row}`}></Field>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}
