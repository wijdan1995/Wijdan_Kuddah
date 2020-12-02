import React, { useEffect, useState } from 'react'

export default function Planet({id}) {
    const [plant, setPlant] = useState({})
    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
            return response.json();
        }).then(response => {
            setPlant(response)
        }).catch(err=>{
            console.log(err);
        });
    }, [id])
    
    return (
        plant.population?
        <div>
            <h2>{plant.name}</h2>
            <p><strong>Climate: </strong>{plant.climate}</p>
            <p><strong>Terrain: </strong>{plant.terrain}</p>
            <p><strong>Surface Water: </strong>{plant.surface_water}</p>
            <p><strong>Population: </strong>{plant.population}</p>
        </div>
        :
        <div className="text-center mt-2">
            <img src="/img/Obi-Wan Kenobi.jpg" alt="Obi-Wan Kenobi" width="500"/>
            <h2>These aren't the droids you're looking for</h2>
        </div>
    )
}
