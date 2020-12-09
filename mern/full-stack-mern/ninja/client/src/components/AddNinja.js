import React, { useState } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'
import NinjaForm from "./NinjaForm";
export default function AddNinja({ninjas, setNinjas}) {
    const [inputs, setInputs] = useState({
        name:'', 
        image:'', 
        description:''
    })
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        // console.log(inputs)
        axios.post('http://localhost:8000/api/ninjas/new', {
            ...inputs
        })
            .then(res=> {
                setNinjas([...ninjas, res.data.ninja])
                setInputs({
                    name:'', 
                    image:'', 
                    description:''
                })
                setErrors({})
                navigate("/")
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            })
        
    }
    return (
        <NinjaForm action="Create" onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors}/>
    )
}
