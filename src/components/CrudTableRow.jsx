import React from "react";

export default function CrudTableRow({el}){
    return(
        <>
             <tr>
                <td>{el.name}</td>
                <td>{el.constellation}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        </>
    )
}