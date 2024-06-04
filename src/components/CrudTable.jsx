import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable({data, setDataToEdit, deleteData}){
    return(
        <>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {data.length > 0 ? data.map(el=><CrudTableRow key={el.id} el={el} 
                   setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                   :<tr><td colSpan="3">No hay datos</td></tr> }
                </tbody>
            </table>
        </>
    )
}