import React, {useState} from 'react'
import axios from 'axios'

export default function AddProduct() {
    const [inputs, setInputs] = useState({
        title:'', 
        price:'', 
        description:''
    })
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(inputs)
        axios.post('http://localhost:8000/api/products/new', {
            ...inputs
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        setInputs({
            title:'', 
            price:'', 
            description:''
        })
    }
    return (
        <div className="text-center">
            <h1>Product Manager</h1>
            <form className="form-group" onSubmit={onSubmitHandler}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title</span>
                    </div>
                    <input type="text" className="form-control" name="title" value={inputs.title} onChange={onChangeHandler} autoFocus />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Price</span>
                    </div>
                    <input type="number" className="form-control" name="price" value={inputs.price} onChange={onChangeHandler} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control"  name="description" cols="30" rows="4" value={inputs.description} onChange={onChangeHandler}></textarea>
                </div>
                <button type="submit" className="btn btn-dark btn-block">Create</button>
            </form>
        </div>
    )
}
