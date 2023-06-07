import './Game.css';
import Board from './Board';

const finished = false; // TODO: replace with state

export default function Game() {

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