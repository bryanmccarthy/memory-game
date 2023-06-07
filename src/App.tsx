import './App.css';
import { useState } from 'react';
import cardset from './cardset';

function App() {
  const [cards, setCards] = useState(cardset);

  return (
    <div className="App">
      Memory Game
    </div>
  );
}

export default App;
