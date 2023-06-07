import './Game.css';
import Board from './Board';
import GameOver from './GameOver';
import { useState } from 'react';
import cardset from '../../cardset';
import { Card } from '../../types/Card';

type GameProps = {
  pairs: number;
  setPairs: (pairs: number) => void;
}

export default function Game({ pairs, setPairs }: GameProps) {
  const [cards, setCards] = useState(shuffleCards(cardset));

  function shuffleCards(cardset: Card[]): Card[] {
    let shuffled = [...cardset];
    
    for(let i = shuffled.length -1; i > 0; i--) {
      const randIdx = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
    }

    return shuffled;
  }

  function handlePlayAgain() {
    setCards(shuffleCards(cardset));
    setPairs(0);
    // Fix colors showing
  }

  return (
    <div className="Game">
      { 
        pairs === 18 ?
          <GameOver handlePlayAgain={handlePlayAgain} />
        :
          <Board cards={cards} setCards={setCards} pairs={pairs} setPairs={setPairs} />
      }
    </div>
  )
}