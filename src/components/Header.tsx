import './Header.css';

type HeaderProps = {
  pairs: number;
  timer: number;
}

export default function Header({ pairs, timer }: HeaderProps) {

  function formatTimer(timer: number) {
    const mins = Math.floor(timer / 60 );
    const seconds = timer % 60;

    return `${mins}:${seconds}`;
  }

  return (
    <div className="Header">
      <div className="Timer">
        {formatTimer(timer)}
      </div>
      <div className="Pairs">
        <p>Pairs: {pairs}/18</p>
      </div>
    </div>
  )
}
