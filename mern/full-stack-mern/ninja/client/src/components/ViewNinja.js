import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
export default function ViewNinja({id, loaded,setLoaded}) {
    const [ninja, setNinja] = useState({});
    const [ninjutsuValue, setNinjutsuValue] = useState('');
    const [errors, setErrors] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res=>{
                setNinja(res.data.ninja);
            });
    },[id, loaded])
    const deleteNinja = () => {
        axios.delete(`http://localhost:8000/api/ninjas/delete/${id}`)
        .then(res => {
            setLoaded(false)
            navigate("/")
        })
    }
    const deleteNinjutsu = (nid) => {
        axios.delete(`http://localhost:8000/api/ninjas/${id}/${nid}`)
        .then(res => {
            setLoaded(false)
        })
    }
    const addNinjutsu = () => {
        axios.post(`http://localhost:8000/api/ninjutsu/new/${id}`, {
            name: ninjutsuValue
        })
        .then(res => {
            setLoaded(false)
            setNinjutsuValue('')
            setErrors({})
        })
        .catch(err=> {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            // Set Errors
            setErrors(errorResponse);
        })
    }
    return (
        <>
            <div className="border p-4 row">
                <div className="col-6">
                    <img className="rounded-circle" src={ninja.image ? ninja.image : "https://www.ccapp.us/site_media/media/boards/member_None/avatar/place%20holder.png"} alt="Generic placeholder" style={{height:"150px", objectFit: "cover"}}/>
                    <h5 className="mt-2">{ninja.name}</h5>
                    <p className="">Description: {ninja.description}</p>
                    <Link to={`/ninja/${ninja._id}/edit`}><button className="btn btn-sm btn-outline-info">Edit</button></Link>
                    <button className="btn btn-sm btn-outline-danger ml-4" onClick={deleteNinja}>Delete</button>
                </div>
                <div className="col-6">
                    <h5 className="">Known Ninjustu</h5>
                    <ul className="list-group list-group-flush">
                        { ninja && ninja.ninjutsu && ninja.ninjutsu.map(nin => <li key={nin._id} className="list-group-item">{nin.name} <button onClick={()=> deleteNinjutsu(nin._id)} className="btn badge badge-danger badge-pill float-right">-</button></li>)}
                    </ul>
                    <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            Add Ninjutsu
                        </span>
                    </div>
                    <input type="text" className="form-control" value={ninjutsuValue} onChange={e => setNinjutsuValue(e.target.value)}/>
                    </div>
                    { errors && errors.name &&
                            <small className="text-danger form-text text-left mb-2">
                                {errors.name.message}
                            </small>
                        }
                    <button type="submit" className="btn btn-dark btn-block mt-2" onClick={addNinjutsu}>Add</button>
                </div>
            </div>
            <Link to={`/`}><button className="btn btn-sm btn-outline-dark mt-4">Back</button></Link>
        </>
    )
}