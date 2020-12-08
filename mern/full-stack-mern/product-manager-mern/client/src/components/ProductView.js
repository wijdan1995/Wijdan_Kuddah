import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default function ProductView({id, products, setProducts}) {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
            });
    },[id])
    const removeFromDom = (productId) => {
        let newProducts = [...products]
        newProducts = newProducts.filter(product => product._id !== productId)
        setProducts(newProducts)
        navigate("/")

    }
    return (
        loaded ?
        <>
            <div className="card text-center">
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Description: {product.description}</p>
                <Link to={`/edit/${product._id}`}><button className="btn btn-sm btn-outline-info ml-4">Edit</button></Link>
                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </div>
            </div>
            <Link to={`/`}><button className="btn btn-sm btn-outline-dark mt-4">Back</button></Link>
        </>

        :
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
