import './Board.css';
import { Card } from '../../types/Card';

type BoardProps = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export default function Board({ cards, setCards }: BoardProps) {

  return (
    <div className="Board">
      {
        cards.map((card, idx) => (
          <div 
            style={ card.flipped ? { backgroundColor: card.color } : cardStyle} 
            className="Card"
            key={idx}
          ></div>
        ))
      }
    </div>
  )
}

const cardStyle = {
  backgroundColor: 'white',
};