import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function ProductView({id}) {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
            });
    },[])
    return (
        loaded ?
        <div className="card text-center">
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>
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
