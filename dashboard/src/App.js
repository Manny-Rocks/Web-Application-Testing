import React, {useState} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);

const reset = () => {
  setStrikes(0);
  setBalls(0);
}

function App() {
  return (
    <div>
      <h1>SCOREBOARD</h1>
      <Dashboard reset={reset} strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls} />
      <Display strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;
