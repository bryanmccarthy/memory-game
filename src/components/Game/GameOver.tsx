import './GameOver.css';

type GameOverProps = {
  handlePlayAgain: () => void;
  timer: number;
}

export default function GameOver({ handlePlayAgain, timer }: GameOverProps) {

  function formatTime(time: number) {
    const mins = Math.floor(time / 60);
    const seconds = time % 60;

    if(mins === 0) return `${seconds} seconds`;
    if(mins === 1) return `${mins} min ${seconds} seconds`

    return `${mins} mins ${seconds} seconds`;
  }

  return (
    <div className="GameOver">
      <h2>Finished!</h2>
      <p>Time: {formatTime(timer)} </p>
      <p>High Score: {formatTime(Number(localStorage.getItem('highscore')))} </p>

      <button className="PlayAgainButton" onClick={handlePlayAgain}>Play again</button>
    </div>
  )
}