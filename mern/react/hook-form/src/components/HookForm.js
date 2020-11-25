import React from 'react'

export default function HookForm({inputs, setInputs}) {

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="FirstName">First Name</label>
                <input name="firstName" type="text" className="form-control" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input name="lastName" type="text" className="form-control" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Email1">Email address</label>
                <input name="email" type="email" className="form-control" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input name="password" type="password" className="form-control" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input name="confirmPassword" type="password" className="form-control" onChange={onChange}/>
            </div>
            {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
        </form>
    )
}
