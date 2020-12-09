import React, { useState } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'
import AuthorsForm from './AuthorsForm'
export default function AddAuthor({authors, setAuthors}) {
    const [inputs, setInputs] = useState({
        name:''
    })
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            ...inputs
        })
            .then(res=> {
                setAuthors([...authors, res.data.author])
                setInputs({
                    name:''
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
        <div>
            <AuthorsForm action="Add" onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors}/>
        </div>
    )
}
