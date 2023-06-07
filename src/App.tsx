import './App.css';
import Header from './components/Header';
import Game from './components/Game/Game';
import { useState } from 'react';

function App() {
  const [pairs, setPairs] = useState(0);

  return (
    <div className="App">
      <Header pairs={pairs} />
      <Game pairs={pairs} setPairs={setPairs} />
    </div>
  );
}

export default App;
