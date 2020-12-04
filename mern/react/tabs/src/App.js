import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Tab from './components/Tab.jsx'
function App() {
  const tabs = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" }]
  const [currentTab, setCurrentTab] = useState(tabs[0])
  return (
    <div className="container mt-5">
      {
        tabs.map(tab => <Tab tab={tab} setCurrentTab={setCurrentTab} />)
      }
      <p className="p-4 border">{currentTab.content}</p>
    </div>
  );
}

export default App;
