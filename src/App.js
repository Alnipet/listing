import './App.css';
import Listing from './components/Listing';
import itemsData from './data/etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={itemsData} />
    </div>
  );
}

export default App;
