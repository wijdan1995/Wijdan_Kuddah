import React from 'react'
import AddProduct from './AddProduct'
import ProductsList from './ProductsList'

export default function MainPage({products, setProducts, loaded, setLoaded}) {
    return (
        <>
            <AddProduct loaded={loaded} setLoaded={setLoaded}/>
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
