import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NinjaForm from './NinjaForm'
import { Link, navigate } from '@reach/router'
export default function EditNinja({id, setLoaded}) {
    const [ninja, setNinja] = useState({});
    const [inputs, setInputs] = useState({})
    const [edited, setEdited] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res => {
                setNinja(res.data.ninja);
                setInputs(res.data.ninja)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setNinja(null)
                setErrors(errorResponse);
            })
    }, [id])
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/ninjas/update/${id}`, {
            ...inputs
        })
            .then(res => {
                setLoaded(false)
                setNinja(inputs)
                setEdited(true)
                setErrors({})
                navigate(`/ninja/${ninja._id}`)

            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            })

    }
    return (
        <div>
            {
                edited && 
                <div className="alert alert-success " role="alert">
                    <strong>Edited successfully</strong>
                </div>
                
            }
            {ninja ? 
            <NinjaForm action="Edit" ninja={ninja} onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors} />
            : 
            <p className="text-center">Ninja not found <Link to="/new">Create new Ninja</Link></p> }
        </div>
    )
}
