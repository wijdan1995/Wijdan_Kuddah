import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function ProductEdit({id}) {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [inputs, setInputs] = useState({})
    const [edited, setEdited] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
                setInputs(res.data.product)
            })
    },[])
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            ...inputs
        })
            .then(res=>console.log(res),
            setLoaded(true), setProduct(inputs), setEdited(true))
            .catch(err=>console.log(err))

    }
    return (
        loaded ?
        <div  className="text-center">
            {
                edited && 
                <div className="alert alert-success " role="alert">
                    <strong>Edited successfully</strong>
                </div>
                
            }
            <h1>ِEdit {product.title}</h1>
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
                <button type="submit" className="btn btn-dark btn-block">Edit</button>
            </form>
        </div>
        :
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
