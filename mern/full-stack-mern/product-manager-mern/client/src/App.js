import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage'
import ProductView from './components/ProductView'
import { Router } from '@reach/router';
function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
              setProducts(res.data.products);
              setLoaded(true);
          });
  },[])
  return (
    <div className="container mt-5">
      <Router>
        <MainPage path="/" products={products} loaded={loaded}/>
        <ProductView path="/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
