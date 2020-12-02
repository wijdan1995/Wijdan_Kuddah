import React, { useEffect, useState } from 'react'

export default function People({id}) {
    const [person, setPerson] = useState({})
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
            return response.json();
        }).then(response => {
            setPerson(response)
        }).catch(err=>{
            console.log(err);
        });
    }, [id])
    return (
            person.skin_color ? 
            <div>
            <h2>{person.name}</h2>
            <p><strong>Height: {person.height}</strong></p>
            <p><strong>Mass: {person.mass}</strong></p>
            <p><strong>Hair Color: {person.hair_color}</strong></p>
            <p><strong>Skin Color: {person.skin_color}</strong></p>
            </div>
            :
            <div className="text-center mt-2">
                <img src="/img/Obi-Wan Kenobi.jpg" alt="Obi-Wan Kenobi" width="500"/>
                <h2>These aren't the droids you're looking for</h2>
            </div>
        
    )
}
