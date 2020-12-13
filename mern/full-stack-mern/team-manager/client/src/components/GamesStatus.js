import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';

export default function GamesStatus({players, num, setPlayers}) {
    const statusHandler = (id, state) => {
        axios.put(`http://localhost:8000/api/players/update/${id}`, {
            [`game${num}`]:{
                "status": state
            }
        })
        .then(res => {
            let newPlayers = [...players]
            newPlayers = newPlayers.filter(player => player._id !== id)
            setPlayers([...newPlayers, res.data.player])
        })
    }
    return (
        <div className="mt-3">
            <Link to='/status/game/1' className='btn btn-sm btn-link'>Game 1</Link>
            <Link to='/status/game/2' className="btn btn-sm btn-link">Game 2</Link>
            <Link to='/status/game/3' className="btn btn-sm btn-link">Game 3</Link>
            <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.sort((a,b) => (a.name.localeCompare(b.name))).map( player => 
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>
                                <button className={`btn ${player['game'+num].status === "Playing" ? "btn-success" : "btn-light"} btn-sm mr-2`} onClick={()=>statusHandler(player._id, "Playing")}>Playing</button>
                                <button className={`btn ${player['game'+num].status === "Not Playing" ? "btn-danger" : "btn-light"} btn-sm mr-2`} onClick={()=>statusHandler(player._id, "Not Playing")}>Not Playing</button>
                                <button className={`btn ${player['game'+num].status === "Undecided" ? "btn-warning" : "btn-light"} btn-sm`} onClick={()=>statusHandler(player._id, "Undecided")}>Undecided</button>
                            </td>
                        </tr>
                        )}
                    
                </tbody>
            </table>
        </div>
    )
}
