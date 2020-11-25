import React from 'react'

export default function DisplayData({formData}) {
    const {firstName, lastName, email, password, confirmPassword} = formData
    return (
        <div className="text-center mt-5">
            <h3>Your Form Data</h3>
            <div className="card">
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">First Name: {firstName}</li>
                    <li className="list-group-item">Last Name: {lastName}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">Confirm Password: {confirmPassword}</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
