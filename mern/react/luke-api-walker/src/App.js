import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
import Form from './components/Form'
import People from './components/People'
import Planet from './components/Planet'
import React from 'react'

function App() {
  return (
    <div className="container mt-5">
      <Form />
      <Router>
        <People path="people/:id"/>
        <Planet path="planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
