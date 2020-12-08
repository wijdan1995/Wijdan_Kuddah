import React from 'react'
import AddProduct from './AddProduct'
import ProductsList from './ProductsList'

export default function MainPage({products, setProducts, loaded}) {
    return (
        <>
            <AddProduct products={products} setProducts={setProducts}/>
            { loaded ? <ProductsList products={products} setProducts={setProducts}/>
            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
        </>
    )
}
