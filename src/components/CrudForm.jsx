import React, {useState, useEffect} from "react";

const initialForm = {
    name:"",
    constellation:"",
    id:null
}

export default function CrudForm(){
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert('llene los campos, no sea imbecil :v')
            return;
        }
    }

    const handleReset = (e) =>{}
    
    return(
        <>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="text" name="constellation" placeholder="Constelación" onChange={handleChange} value={form.constellation}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </>
    )
};