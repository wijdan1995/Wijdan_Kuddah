import React from 'react'
import { Link } from '@reach/router';
export default function ProductsList({products}) {
    return (
        <>
            <h2 className="text-center my-4 border-top pt-4">All Products</h2>
            <ul className="list-group text-center">
                {
                    products.map((product) =>  <Link to={`/${product._id}`} key={product._id} className="list-group-item list-group-item-action">{product.title}</Link>)
                }
            </ul>
        </>
        
    )
}
