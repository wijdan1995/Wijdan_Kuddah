import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import ProductForm from './ProductForm';

export default function ProductEdit({id}) {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [inputs, setInputs] = useState({})
    const [edited, setEdited] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
                setInputs(res.data.product)
            })
    },[id])
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            ...inputs
        })
            .then(res=>{
                setLoaded(true)
                setProduct(inputs)
                setEdited(true)
                setErrors({})
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            })

    }
    return (
        loaded ?
        <div  >
            {
                edited && 
                <div className="alert alert-success " role="alert">
                    <strong>Edited successfully</strong>
                </div>
                
            }
            <h1 className="text-center">ِEdit {product.title}</h1>
            { inputs && <ProductForm action="Edit" onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors}/>}
            <Link to={`/${product._id}`}><button className="btn btn-sm btn-outline-dark mt-4">Back</button></Link>
        </div>
        :
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
