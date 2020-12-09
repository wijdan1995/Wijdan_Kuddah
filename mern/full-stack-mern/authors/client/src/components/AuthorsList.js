import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
export default function AuthorsList({authors, setAuthors}) {
    const removeFromDom = (id) => {
        let newAuthors = [...authors]
        newAuthors = newAuthors.filter(author => author._id !== id)
        setAuthors(newAuthors)
    }
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then(res => {
            removeFromDom(id)
        })
    }
    return (
        <div>
            <Link to="/new"><button className="btn btn-sm btn-primary mb-4">Add an author</button></Link>
            <p>We have quotes by:</p>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.sort((a,b) => (a.name.localeCompare(b.name))).map((author) => 
                        <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}><button type="button" className="btn btn-sm btn-outline-info mr-2">Edit</button></Link>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>deleteHandler(author._id)}>Delete</button>
                        </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
