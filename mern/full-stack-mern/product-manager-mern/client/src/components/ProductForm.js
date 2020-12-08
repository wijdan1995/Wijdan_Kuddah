import React from 'react';

export default function ProductForm({action, inputs, setInputs, onSubmitHandler, errors}) {
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form className="form-group" onSubmit={onSubmitHandler}>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title</span>
                    </div>
                    <input type="text" className="form-control" name="title" value={inputs.title} onChange={onChangeHandler} autoFocus />
                    
                </div>
                { errors && errors.title &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.title.message}
                </small>
                }
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Price</span>
                    </div>
                    <input type="number" className="form-control" name="price" value={inputs.price} onChange={onChangeHandler} />
                </div>
                { errors && errors.price &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.price.message}
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
                <button type="submit" className="btn btn-dark btn-block">{action}</button>
            </form>
        </div>
    )
}
