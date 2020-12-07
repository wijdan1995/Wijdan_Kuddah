import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
export default function ProductsList({products, setProducts}) {
    const removeFromDom = (productId) => {
        let newProducts = [...products]
        newProducts = newProducts.filter(product => product._id !== productId)
        setProducts(newProducts)
    }
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
    }
    return (
        <>
            <h2 className="text-center my-4 border-top pt-4">All Products</h2>
            <ul className="list-group text-center">
                {
                    products.map((product) =>  
                        <li key={product._id} className="list-group-item list-group-item-action">
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            <Link to={`/edit/${product._id}`}><button className="btn btn-sm btn-outline-info ml-4">Edit</button></Link>
                            <button className="btn btn-sm btn-outline-danger ml-2" onClick={() => deleteProduct(product._id)}>Delete</button>
                        </li>)
                }
            </ul>
        </>
        
    )
}
