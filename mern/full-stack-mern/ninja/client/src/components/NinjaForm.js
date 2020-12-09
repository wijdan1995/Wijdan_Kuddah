import React from 'react'
import { Link } from '@reach/router';
export default function NinjaForm({action, inputs, setInputs, onSubmitHandler, errors,ninja}) {
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            {action === "Create" ? <p>New Ninja</p> : <p>Edit {ninja.name}</p>}
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
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Image URL</span>
                    </div>
                    <input type="url" className="form-control" name="image" value={inputs.image} onChange={onChangeHandler} />
                </div>
                { errors && errors.image &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.image.message}
                </small>
                }
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control"  name="description" cols="30" rows="4" value={inputs.description} onChange={onChangeHandler}></textarea>
                </div>
                { errors && errors.description &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.description.message}
                </small>
                }
                <button type="submit" className="btn btn-dark btn-block mb-2">{action} Ninja</button>
                <Link className="btn btn-secondary btn-block" to={`/`}>Cancel</Link>
            </form>
        </div>
    )
}
