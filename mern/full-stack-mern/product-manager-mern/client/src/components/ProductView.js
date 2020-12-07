import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
export default function ProductView({id, products, setProducts}) {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
            });
    },[])
    const removeFromDom = (productId) => {
        let newProducts = [...products]
        newProducts = newProducts.filter(product => product._id !== productId)
        setProducts(newProducts)
    }
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res => {
            removeFromDom(productId)
            navigate('/')
        })
    }
    return (
        loaded ?
        <div className="card text-center">
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>
            <button className="btn btn-sm btn-outline-danger ml-2" onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        </div>
        :
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
