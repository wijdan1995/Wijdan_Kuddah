import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HookForm from './components/HookForm'
import DisplayData from './components/DisplayData'
function App() {
  const [inputs, setInputs] = useState({
    firstName:'', 
    lastName:'', 
    email:'', 
    password:'', 
    confirmPassword:''
  })
  return (
    <div className="container mt-5">
      <HookForm inputs={inputs} setInputs={setInputs}/>
      <DisplayData formData={inputs}/>
    </div>
  );
}

export default App;
