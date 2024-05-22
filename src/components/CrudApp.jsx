import React, {useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb=[
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso"
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragón"
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"Cisne"
    },
    {
        id:4,
        name:"Shun",
        constellation:"Andrpmeda"
    },
    {
        id:5,
        name:"Ikki",
        constellation:"Fénix"
    },
];


export default function CrudApp(){
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) =>{}

    const updateData = (data) =>{}

    const deleteData = (id) =>{}

    return(
        <>
            <h2>Crud App</h2>
            <CrudForm createData= {createData} updateData={updateData} 
            dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData= {createData}/>
        </>
    )
}