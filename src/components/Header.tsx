import './Header.css';

type HeaderProps = {
  pairs: number;
}

export default function Header({ pairs }: HeaderProps) {

  return (
    <div className="Header">
      <p>timer</p>
      <div className="Pairs">
        <p>Pairs: {pairs}/18</p>
      </div>
    </div>
  )
}
