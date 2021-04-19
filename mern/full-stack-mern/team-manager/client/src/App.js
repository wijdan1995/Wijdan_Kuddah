import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import HomeView from "./components/HomeView";
import GamesStatus from "./components/GamesStatus";
import {navigate } from '@reach/router'
import { useEffect, useState } from "react";
import { Router } from '@reach/router';
import axios from 'axios';
function App() {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res=>{
        setPlayers(res.data.players);
        setLoaded(true);
        navigate('/players/list')
      });
  }, [loaded])
  return (
    <div className="container mt-5">
      <Nav />
      <Router>
        <HomeView path='/players/:action' players={players} setPlayers={setPlayers}/>
        <GamesStatus path='/status/game/:num' players={players} setPlayers={setPlayers}/>
      </Router>
    </div>
  );
}

export default App;
