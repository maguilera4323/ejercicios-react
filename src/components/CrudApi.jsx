import React, {useEffect, useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";


export default function CrudApi(){
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/santos"

    useEffect(()=>{
        setLoading(true)

        api.get(url).then((res)=>{
            if(!res.err){
                setDb(res)
                setError(null)
            }else{
                setDb([])
                setError(res)
            }
        })

        setLoading(false)
    },[url])


    const createData = (data) =>{
        let options = {
            body:data,
            headers:{
                "content-type":"application/json"
            }
        }

        data.id = Date.now().toString()
        //console.log(data)

        api.post(url,options).then((res)=>{
            console.log(res)
            if(!res.err){
                setDb([...db,res])
            }else{
                setError(res)
            }
        })
    }

    const updateData = (data) =>{
        
        let options = {
            body:data,
            headers:{
                "content-type":"application/json"
            }
        }
        
        let endpoint = `${url}/${data.id}`

        console.log("Endpoint:", endpoint);
        console.log("Options:", options);

        
        api.put(endpoint,options).then((res)=>{
            console.log(res)
            if(!res.err){
                let newData = db.map(el=>el.id===data.id ? data : el)
                setDb(newData)
            }else{
                setError(res)
            }
        })
    }

    const deleteData = (id) =>{
        let isDelete = window.confirm('¿Estas seguro de eliminar el registro con el id '+id+'?')

        let options = {
            headers:{
                "content-type":"application/json"
            }
        }
        
        let endpoint = `${url}/${id}`
        
        api.del(endpoint,options).then((res)=>{
            console.log(res)
            if(!res.err){
                let newData = db.filter(el=>el.id!==id)
                setDb(newData)
            }else{
                setError(res)
            }
        })
    }

    return(
        <>
            <h2>Crud Api</h2>
            <article className="grid-1-2">
                <CrudForm createData= {createData} updateData={updateData} 
                dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                {loading && <Loader />}
                {error &&  <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
                {db &&
                <CrudTable data={db} 
                setDataToEdit={setDataToEdit} 
                deleteData= {deleteData}/>}
            </article>
        </>
    )
}