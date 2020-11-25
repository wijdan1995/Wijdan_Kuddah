import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HookForm from './components/HookForm'
import DisplayData from './components/DisplayData'
function App() {
  const [form, setForm] = useState({})
  return (
    <div class="container mt-5">
      <HookForm setForm={setForm}/>
      <DisplayData formData={form}/>
    </div>
  );
}

export default App;
