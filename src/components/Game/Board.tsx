import './Board.css';
import { Card } from '../../types/Card';

type BoardProps = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export default function Board({ cards, setCards }: BoardProps) {

  return (
    <div className="Board">
      <h2>Board</h2>
      {
        cards.map((card, idx) => (
          <div className="Card" key={idx}>{card.id}</div>
        ))
      }
    </div>
  )
}