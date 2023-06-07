import './App.css';
import Header from './components/Header';
import Game from './components/Game/Game';
import { useState } from 'react';
import cardset from './cardset';

function App() {
  const [cards, setCards] = useState(cardset);

  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
