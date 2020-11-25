import React from 'react'

export default function DisplayData(props) {
    const {firstName, lastName, email, password, confirmPassword} = props.formData
    return (
        <div className="text-center mt-5">
            <h3>Your Form Data</h3>
            <div class="card">
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">First Name: {firstName}</li>
                    <li class="list-group-item">Last Name: {lastName}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Password: {password}</li>
                    <li class="list-group-item">Confirm Password: {confirmPassword}</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
