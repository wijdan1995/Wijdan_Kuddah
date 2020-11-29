import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Box from './components/Box.jsx'
import BoxForm from './components/BoxForm.jsx'

function App() {
  const [boxs, setBoxs] = useState([])
  return (
    <div className="container mt-5">
      <BoxForm boxs={boxs} setBoxs={setBoxs}/>
      <div className="d-flex mt-3 justify-content-between flex-wrap">
        {boxs.map(box => <Box box={box}/>)}
      </div>
      
    </div>
  );
}

export default App;
