import React, { useState } from 'react'

export default function HookForm(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = e => {
        e.preventDefault();
        const form = { firstName, lastName, email, password, confirmPassword}
        props.setForm(form)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label for="FirstName">First Name</label>
                <input type="text" className="form-control" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="LastName">Last Name</label>
                <input type="text" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="Email1">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="Password">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="ConfirmPassword">Confirm Password</label>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}
