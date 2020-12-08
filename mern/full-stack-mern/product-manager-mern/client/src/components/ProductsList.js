import React from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton'

export default function ProductsList({products, setProducts}) {
    const removeFromDom = (productId) => {
        let newProducts = [...products]
        newProducts = newProducts.filter(product => product._id !== productId)
        setProducts(newProducts)
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
                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                        </li>)
                }
            </ul>
        </>
        
    )
}
