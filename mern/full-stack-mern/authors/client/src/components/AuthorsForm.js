import {Link, navigate } from '@reach/router'
import React from 'react'

export default function AuthorsForm({action, inputs, setInputs, onSubmitHandler, errors}) {
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Link to={`/`}><button className="btn btn-sm btn-outline-dark mb-4">Home</button></Link>
            { action === "Edit" ? <h4>Edit this author</h4> : <h4>Add a new author</h4>}
            <div>
            <form className="form-group" onSubmit={onSubmitHandler}>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" className="form-control" name="name" value={inputs.name} onChange={onChangeHandler} autoFocus />
                    
                </div>
                { errors && errors.name &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.name.message}
                </small>
                }
                <button type="submit" className="btn btn-dark btn-block">Submit</button>
                <button className="btn btn-secondary btn-block" onClick={()=> navigate("/")}>Cancel</button>
            
            </form>
        </div>
        </div>
    )
}
