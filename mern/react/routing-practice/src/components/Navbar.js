import React from 'react'
import { Link } from "@reach/router";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to = "/home">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link" to = "/4">Number</Link>
                <Link className="nav-link" to = "/hello">Hello</Link>
                <Link className="nav-link" to = "/hello/red/blue">Hello Red Blue</Link>
                </div>
            </div>
        </nav>
    )
}
