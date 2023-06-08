import './Game.css';
import Board from './Board';
import GameOver from './GameOver';
import { useState } from 'react';
import cardset from '../../cardset';
import { Card } from '../../types/Card';

type GameProps = {
  pairs: number;
  setPairs: (pairs: number) => void;
  timer: number;
  setTimer: (timer: number) => void;
  setActive: (active: boolean) => void;
}

export default function Game({ pairs, setPairs, timer, setTimer, setActive }: GameProps) {
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
    setPairs(0);
    resetCards();
    setTimer(0);
  }

  function resetCards() {
    let newCards = [...cards];

    for(let i = 0; i < newCards.length; i++) {
      newCards[i].matched = false;
    }

    setCards(shuffleCards(newCards));
  }

  return (
    <div className="Game">
      { 
        pairs === 18 ?
          <GameOver handlePlayAgain={handlePlayAgain} timer={timer} />
        :
          <Board cards={cards} setCards={setCards} pairs={pairs} setPairs={setPairs} timer={timer} setActive={setActive} />
      }
    </div>
  )
}