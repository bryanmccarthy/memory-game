import './Board.css';
import { Card } from '../../types/Card';
import { useState } from 'react';

type BoardProps = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export default function Board({ cards, setCards }: BoardProps) {

  function handleCardFlip(card: Card) {
    let newCards = [...cards];

    for(let i = 0; i < newCards.length; i++) {
      if(newCards[i].id === card.id) {
        newCards[i].flipped = true;
      }
    }

    setCards(newCards);
  }

  return (
    <div className="Board">
      {
        cards.map((card, idx) => (
          <div 
            style={ card.flipped ? { backgroundColor: card.color } : cardStyle} 
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
};