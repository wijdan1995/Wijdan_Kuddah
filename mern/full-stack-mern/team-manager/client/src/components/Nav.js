import React from 'react'
import { Link } from '@reach/router'
export default function Nav() {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <Link to='/players/list' className="btn btn-primary">Manage Players</Link>
            <Link to='/status/game/1' className="btn btn-primary">Manage Players Status</Link>
        </div>
    )
}
