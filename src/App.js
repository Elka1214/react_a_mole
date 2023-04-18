import { useState } from "react";
import Header from "./Components/Header";
import MoleContainer from "./Components/MoleContainer";
import "./App.css";

function App() {
  let [playing, setPlaying] = useState(false);
  let [score, setScore] = useState(0);
  let [paused, setPaused] = useState(false);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} score={score} setScore={setScore} />);
    }

    return <div>{hills}</div>;
  };

  const handleStart = () => {
    setPlaying(!playing);
    setPaused(false);
  };

  return (
    <div>
      <Header
        score={score}
        paused={paused}
        setPaused={setPaused}
        setPlaying={setPlaying}
        setScore={setScore}
      />
      <div className="moles">
        {playing ? (
          createMoleHill()
        ) : (
          <img
            className="splash"
            src="./images/splash.png"
            alt="Mole Splash"
            onClick={handleStart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
