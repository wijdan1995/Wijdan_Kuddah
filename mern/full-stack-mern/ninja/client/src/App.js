import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router } from "@reach/router";
import Navbar from './components/Navbar'
import NinjaList from './components/NinjaList'
import AddNinja from './components/AddNinja'
import EditNinja from './components/EditNinja'
import ViewNinja from './components/ViewNinja'
function App() {
  const [ninjas, setNinjas] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/ninjas')
          .then(res=>{
              setNinjas(res.data.ninjas);
              setLoaded(true);
          });
  },[loaded])
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Router>
          <NinjaList path='/' ninjas={ninjas} setNinjas={setNinjas}/>
          <AddNinja path='/new' ninjas={ninjas} setNinjas={setNinjas}/>
          <EditNinja path='/ninja/:id/edit/' ninjas={ninjas} setNinjas={setNinjas} setLoaded={setLoaded}/>
          <ViewNinja path='/ninja/:id' loaded={loaded} setLoaded={setLoaded}/>
        </Router>
      </div>
    </>
    
  );
}

export default App;
