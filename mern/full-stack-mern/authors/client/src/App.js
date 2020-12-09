import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router } from '@reach/router';
import AuthorsList from './components/AuthorsList'
import AddAuthor from './components/AddAuthor'
import EditAuthor from './components/EditAuthor'
function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/authors')
          .then(res=>{
              setAuthors(res.data.authors);
              setLoaded(true);
          });
  },[loaded])
  return (
    <div className="container mt-5">
      <h1 className="text-center">Favorite authors</h1>
      <Router>
        <AuthorsList path="/" authors={authors} setAuthors={setAuthors} loaded={loaded} setLoaded={setLoaded}/>
        <AddAuthor path="/new" authors={authors} setAuthors={setAuthors}/>
        <EditAuthor path="/edit/:id" authors={authors} setAuthors={setAuthors} setLoaded={setLoaded}/>
      </Router>
      
    </div>
  );
}

export default App;
