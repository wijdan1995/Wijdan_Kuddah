import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react'

function App() {
  const [pokemons, setPokemons] = useState([])
  const handleFetch = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response=>{
      setPokemons(response.data.results);
    })
  }
  return (
    <div className="container mt-5 text-center">
      <button type="button" className="btn btn-primary" onClick={handleFetch}>Fetch Pokemon</button>
      <div>
        <ul className="mt-3 list-group">
          {
            pokemons.map((poke, i) => <li className="list-group-item" key={i}>{poke.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
