import './GameOver.css';

type GameOverProps = {
  handlePlayAgain: () => void;
}

export default function GameOver({ handlePlayAgain }: GameOverProps) {

  return (
    <div className="GameOver">
      <h2>Finished!</h2>
      <p>Time: </p>
      <p>High Score: </p>

      <button className="PlayAgainButton" onClick={handlePlayAgain}>Play again</button>
    </div>
  )
}