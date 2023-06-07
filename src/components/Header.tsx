import './Header.css';

type HeaderProps = {
  pairs: number;
}

export default function Header({ pairs }: HeaderProps) {

  return (
    <div className="Header">
      <div className="Timer">
        timer
      </div>
      <div className="Pairs">
        <p>Pairs: {pairs}/18</p>
      </div>
    </div>
  )
}
