import './Game.css';
import Board from './Board';
import { useState } from 'react';
import cardset from '../../cardset';

const finished = false; // TODO: replace with state

type GameProps = {
  setPairs: (pairs: number) => void;
}

export default function Game({ setPairs }: GameProps) {
  const [cards, setCards] = useState(cardset);

  return (
    <div className="Game">
      { 
        finished ?
          <p>Game Over!</p>
        :
          <Board />
      }
    </div>
  )
}