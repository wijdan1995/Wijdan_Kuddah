import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Tab from './components/Tab.jsx'
function App() {
  const tabs =["Tab 1", "Tab 2", "Tab 3", "Tab 4"]
  const [currentTab, setCurrentTab] = useState(tabs[0])
  return (
    <div className="container mt-5">
      {
        tabs.map(tab => <Tab tab={tab} setCurrentTab={setCurrentTab}/>)
      }
      <p className="p-4 border">{currentTab} content is showing here</p>
    </div>
  );
}

export default App;
