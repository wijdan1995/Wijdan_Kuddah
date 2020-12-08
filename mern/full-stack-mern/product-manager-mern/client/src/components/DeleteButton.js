import React from 'react';
import axios from 'axios';

export default function DeleteButton({productId, successCallback}) {
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res => {
            successCallback()
        })
    }
    return (
        <button className="btn btn-sm btn-outline-danger ml-2" onClick={deleteProduct}>Delete</button>
    )
}
