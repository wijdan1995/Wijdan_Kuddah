import React from 'react'
import AddProduct from './AddProduct'
import ProductsList from './ProductsList'

export default function MainPage({products, loaded}) {
    return (
        <>
            <AddProduct />
            { loaded && <ProductsList products={products}/>}
        </>
    )
}
