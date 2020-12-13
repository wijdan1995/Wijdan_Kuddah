import React, { useState } from 'react'
import {navigate, Link } from '@reach/router'
import axios from 'axios';
export default function HomeView({setPlayers, players, action }) {
    const [inputs, setInputs] = useState({
        name:'',
        preferredPos:''
    })
    const [errors, setErrors] = useState([]);
    const [valid, setValid] = useState(false);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', {
            ...inputs
        })
            .then(res=> {
                setPlayers([...players, res.data.player])
                setInputs({
                    name:'',
                    preferredPos:''
                })
                setErrors({})
                navigate("/players/list")
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            })
    }
    const removeFromDom = (id) => {
        let newPlayers = [...players]
        newPlayers = newPlayers.filter(player => player._id !== id)
        setPlayers(newPlayers)
    }
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/players/delete/${id}`)
        .then(res => {
            removeFromDom(id)
        })
    }
    const checkValidation = (e) => {
        if(e.target.name === "name"  && e.target.value.length > 0){
            if(e.target.value.length < 2){
                setErrors({
                    ...errors,
                    [e.target.name]: {
                        message:`${e.target.name} must be at least 2 characters.`
                    }
                })
                setValid(false)
            }
            else {
                setErrors({
                    ...errors,
                    [e.target.name]: {
                        message:""
                    }
                })
                setValid(true)
            }
        }

    }
    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        checkValidation(e)
    }
    return (
        <div className="mt-3">
            <Link to='/players/list' className="btn btn-sm btn-link">List</Link>
            <Link to='/players/addplayer' className="btn btn-sm btn-link">Add Players</Link>
            { action === "list" ? 
            <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Preferred Position</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.sort((a,b) => (a.name.localeCompare(b.name))).map( player => 
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPos}</td>
                            <td><button className='btn btn-danger btn-sm' onClick={()=>deleteHandler(player._id)}>Delete</button></td>
                        </tr>
                        )}
                    
                </tbody>
            </table>
            : 
            <form className="form-group mt-4" onSubmit={onSubmitHandler}>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Player Name</span>
                    </div>
                    <input type="text" className="form-control" name="name" value={inputs.name} onChange={onChangeHandler} autoFocus />
                    
                </div>
                { errors && errors.name &&
                <small className="text-danger form-text text-left mb-2">
                    {errors.name.message}
                </small>
                }
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Preferred Position</span>
                    </div>
                    <input type="text" className="form-control" name="preferredPos" value={inputs.preferredPos} onChange={onChangeHandler} />
                </div>
                <button type="submit" className="btn btn-dark btn-block" disabled={!valid}>Add</button>
            
            </form>
            }
        </div>
    )
}
