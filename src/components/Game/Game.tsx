import './Game.css';
import Board from './Board';
import GameOver from './GameOver';
import { useState } from 'react';
import cardset from '../../cardset';
import { Card } from '../../types/Card';

const finished = false; // TODO: replace with state

type GameProps = {
  setPairs: (pairs: number) => void;
}

export default function Game({ setPairs }: GameProps) {
  const [cards, setCards] = useState(shuffleCards(cardset));

  function shuffleCards(cardset: Card[]): Card[] {
    let shuffled = [...cardset];
    
    for(let i = shuffled.length -1; i > 0; i--) {
      const randIdx = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
    }

    return shuffled;
  }

  return (
    <div className="Game">
      { 
        finished ?
          <GameOver />
        :
          <Board cards={cards} setCards={setCards} />
      }
    </div>
  )
}