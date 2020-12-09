import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
export default function NinjaList({ninjas, setNinjas}) {
    const [option, setOption] = useState("des")
    const [searchQ, setSearchQ] = useState("")
    const sortingNinjas = (option) =>{
        let sortedNinjas = [...ninjas]
        if ( option === "asc") {
            sortedNinjas = sortedNinjas.sort((a,b) => a.ninjutsu.length - b.ninjutsu.length)
            setNinjas(sortedNinjas)
        }
        if (option === "des" ) {
            sortedNinjas = sortedNinjas.sort((a,b) => b.ninjutsu.length - a.ninjutsu.length)
            setNinjas(sortedNinjas)
        }
        
    }
    useEffect(() => {
        sortingNinjas(option)
    }, [option])
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="input-group col-6 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="fa fa-search"></span>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search" onChange={e => setSearchQ(e.target.value)}/>
                </div>
                <div className="input-group col-6 pr-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            Sort
                        </span>
                    </div>
                    <select className="form-control" onChange={(e)=> setOption(e.target.value)}>
                        <option value="des">Order By Ninjutsu (Descending)</option>
                        <option value="asc">Order By Ninjutsu (Ascending)</option>
                    </select>
                </div>
            </div>
            <div className="mt-4">
                {ninjas.filter(ninja => ninja.name.toLowerCase().includes(searchQ.toLowerCase())).map(ninja => 
                    <div key={ninja._id} className="media border p-3 mb-2">
                    <img className="d-flex mr-3" src={ ninja.image ? ninja.image : "https://www.ccapp.us/site_media/media/boards/member_None/avatar/place%20holder.png"} alt="Generic placeholder" style={{width:"64px", height:"64px", objectFit: "cover"}} />
                    <div className="media-body">
                        <div className="d-flex justify-content-between">
                            <Link to={`/ninja/${ninja._id}`}><h5 className="mt-0">{ninja.name}</h5></Link>
                            <h5 className="mt-0">Known Ninjutsu: {ninja.ninjutsu.length}</h5>
                        </div>
                        {ninja.description}
                    </div>
                </div>
                )}
                
            </div>
        </div>
    )
}
