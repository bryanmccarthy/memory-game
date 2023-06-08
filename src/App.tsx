import './App.css';
import Header from './components/Header';
import Game from './components/Game/Game';
import { useEffect, useState } from 'react';

function App() {
  const [pairs, setPairs] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;

    if(active) {
      interval = setInterval(() =>  {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active])

  return (
    <div className="App">
      <Header pairs={pairs} timer={timer} />
      <Game pairs={pairs} setPairs={setPairs} setActive={setActive} />
    </div>
  );
}

export default App;
