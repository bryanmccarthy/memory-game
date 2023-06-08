import './Board.css';
import { Card } from '../../types/Card';
import { useState } from 'react';

type BoardProps = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
  pairs: number;
  setPairs: (pair: number) => void;
  timer: number;
  setActive: (active: boolean) => void;
}

export default function Board({ cards, setCards, pairs, setPairs, timer, setActive }: BoardProps) {
  const [flipped, setFlipped] = useState<number>(0);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  function checkForHighscore() {
    if(timer < Number(localStorage.getItem('highscore')) || !localStorage.getItem('highscore')) {
      localStorage.setItem('highscore', String(timer));
    }
    setActive(false);
  }

  async function checkForMatch() {
    let flippedCards = [];

    for(let i = 0; i < cards.length; i++) {
      if(cards[i].flipped === true) {
        flippedCards.push(cards[i]);
      }
    }

    let newCards = [...cards];

    if(flippedCards[0].color === flippedCards[1].color) {
      for(let i = 0; i < newCards.length; i++) {
        if(newCards[i].flipped === true) {
          newCards[i].matched = true;
          newCards[i].flipped = false;
        }
      }

      if(pairs == 17) {
        checkForHighscore();
      }

      setPairs(pairs + 1);
    } else {
      await sleep(1000);
      for(let i = 0; i < newCards.length; i++) {
        if(newCards[i].flipped === true) {
          newCards[i].flipped = false;
        }
      }
    }

    setFlipped(0);
  }

  function handleCardFlip(card: Card) {
    setActive(true);
    let newCards = [...cards];

    for(let i = 0; i < newCards.length; i++) {
      if(newCards[i].id === card.id) {
        newCards[i].flipped = true;
      }
    }

    if(flipped === 1) {
      checkForMatch();
    } else {
      setFlipped(1);
    }

    setCards(newCards);
  }

  return (
    <div className="Board">
      {
        cards.map((card, idx) => (
          <div 
            style={ card.matched ? { visibility: 'hidden' } : card.flipped ? { backgroundColor: card.color } : cardStyle } 
            className="Card"
            key={idx}
            onClick={() => handleCardFlip(card)}
          ></div>
        ))
      }
    </div>
  )
}

const cardStyle = {
  backgroundColor: 'white',
  color: 'black'
};