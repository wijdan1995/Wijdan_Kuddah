import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './PersonCard'
function App() {
  return (
  <div class="container mt-5">
    <PersonCard lastName="Doe" firstName="Jane" age="45" hairColor="Black" />
    <PersonCard lastName="Smith" firstName="John" age="88" hairColor="Brown" />
    <PersonCard lastName="Fillmore" firstName="Millard" age="50" hairColor="Brown" />
    <PersonCard lastName="Smith" firstName="Maria" age="62" hairColor="Brown" />
  </div>
  );
}

export default App;
