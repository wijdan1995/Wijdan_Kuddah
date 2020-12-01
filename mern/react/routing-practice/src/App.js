import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Var from './components/Var'
import WordColor from './components/WordColor'
function App() {
  return (      
    <>
    <Navbar />
    <div className="container mt-5 text-center">
      <Router>
        <Home path="/home"/>
        <Var path="/:variable"/>
        <WordColor path="/:word/:fontColor/:bgColor"/>
      </Router>
    </div>
    </>
  );
}

export default App;
