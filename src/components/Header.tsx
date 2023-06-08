import './Header.css';

type HeaderProps = {
  pairs: number;
  timer: number;
}

export default function Header({ pairs, timer }: HeaderProps) {

  function formatTimer(timer: number) {
    const mins = Math.floor(timer / 60 );
    const seconds = timer % 60;

    if(mins === 0) return `${seconds} seconds`;
    if(mins === 1) return `${mins} min ${seconds} seconds`

    return `${mins} mins ${seconds} seconds`;
  }

  return (
    <div className="Header">
      <div className="Timer">
        {
          timer > 0 ?
            formatTimer(timer)
          :
            <p className="Instruction">Click a card to start</p> 
        }
      </div>
      <div className="Pairs">
        <p>Pairs: {pairs}/18</p>
      </div>
    </div>
  )
}
