import React, { useState } from 'react'
import { navigate } from "@reach/router";

export default function Form() {
    const options = ["people", "planets"]
    const [id, setId] = useState(1)
    const [query, setQuery] = useState(options[0])

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${query}/${id}`)
    }
    return (
        <form onSubmit={e => submitHandler(e)}>
        <div className="form-row">
            <div className="form-group row col-6 mr-2">
                <label className="col-3 col-form-label">Search for</label>
                <select className="form-control col-9 text-capitalize" onChange={e => setQuery(e.target.value)}>
                    {
                    options.map((option, i) => <option key={i} className="text-capitalize">{option}</option>)
                    }
                </select>
            </div>
            <div className="form-group row col-4 mr-2">
                <label className="col-2 col-form-label">ID</label>
                <input type="number" min="1" className="form-control col-10" defaultValue={id} onChange={e => setId(e.target.value)}/>
            </div>
            <div className="col-2">
            <button type="submit" className="btn btn-primary">Search</button>
            </div>
        </div>
        </form>
    )
}
