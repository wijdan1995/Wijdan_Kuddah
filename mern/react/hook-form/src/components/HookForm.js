import React, {useState} from 'react'

export default function HookForm({inputs, setInputs}) {
    const [errors, setErrors] = useState({})
    const checkValidation = (e) => {
        if((e.target.name === "firstName" || e.target.name === "lastName") && e.target.value.length > 0){
            if(e.target.value.length < 3)
                setErrors({
                    ...errors,
                    [e.target.name]: `${e.target.name} must be at least 2 characters.`
                })
            else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        } else if (e.target.name === "email" && e.target.value.length > 0){
            if(e.target.value.length < 5)
                setErrors({
                    ...errors,
                    [e.target.name]: `${e.target.name} must be at least 5 characters.`
                })
            else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        } else if ((e.target.name === "password" || e.target.name === "confirmPassword") && e.target.value.length > 0){
            if(e.target.value.length < 8)
                setErrors({
                    ...errors,
                    [e.target.name]: `${e.target.name} must be at least 8 characters.`
                })
            else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        } if ( e.target.name === "confirmPassword" && e.target.value.length > 0){
            console.log(inputs.password)
            if(e.target.value !== inputs.password)
                setErrors({
                    ...errors,
                    [e.target.name]: `${e.target.name} must match password.`
                })
            else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }
    }

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
                <input name="firstName" type="text" className="form-control" onChange={onChange} onBlur={checkValidation} onKeyUp={checkValidation}/>
                <small className="form-text text-danger">{errors.firstName}</small>
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input name="lastName" type="text" className="form-control" onChange={onChange} onBlur={checkValidation} onKeyUp={checkValidation}/>
                <small className="form-text text-danger">{errors.lastName}</small>
            </div>
            <div className="form-group">
                <label htmlFor="Email1">Email address</label>
                <input name="email" type="email" className="form-control" onChange={onChange} onBlur={checkValidation} onKeyUp={checkValidation}/>
                <small className="form-text text-danger">{errors.email}</small>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input name="password" type="password" className="form-control" onChange={onChange} onBlur={checkValidation} onKeyUp={checkValidation}/>
                <small className="form-text text-danger">{errors.password}</small>
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input name="confirmPassword" type="password" className="form-control" onChange={onChange} onBlur={checkValidation} onKeyUp={checkValidation}/>
                <small className="form-text text-danger">{errors.confirmPassword}</small>
            </div>
            {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
        </form>
    )
}
