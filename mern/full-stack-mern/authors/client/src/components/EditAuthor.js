import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthorsForm from './AuthorsForm'
import { Link } from '@reach/router'
export default function EditAuthor({ id , setLoaded}) {
    const [author, setAuthor] = useState({});
    const [inputs, setInputs] = useState({})
    const [edited, setEdited] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data.author);
                setLoaded(true);
                setInputs(res.data.author)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setAuthor(null)
                setErrors(errorResponse);
            })
    }, [id])
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
            ...inputs
        })
            .then(res => {
                setLoaded(false)
                setAuthor(inputs)
                setEdited(true)
                setErrors({})
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
            {author ? 
            <AuthorsForm action="Edit" onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors} />
            : 
            <p className="text-center">Author not found <Link to="/new">Create new Author</Link></p> }
        </div>
    )
}
