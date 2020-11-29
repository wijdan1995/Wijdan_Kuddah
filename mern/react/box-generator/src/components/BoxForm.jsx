import React, { useState } from 'react'

export default function BoxForm({boxs, setBoxs}) {
    const [box, setBox] = useState({color: '', width: '', height: ''})
    const handleSubmit = (event) => {
        // console.log(box);
        setBoxs([...boxs, box])
        // console.log(boxs);
        setBox({color: '', width: '', height: ''})
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" value={box.color} onChange={(e) => setBox({...box, color: e.target.value})}/>
            </div>
            <div className="form-group">
                <label>width</label>
                <input type="number" min='10' className="form-control" value={box.width} onChange={(e) => setBox({...box, width: e.target.value})}/>
            </div>
            <div className="form-group">
                <label>height</label>
                <input type="number" min='10' className="form-control" value={box.height} onChange={(e) => setBox({...box, height: e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    )
}
