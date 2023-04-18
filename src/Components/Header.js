function Header({ score, paused, setPaused, setPlaying, setScore }) {
  const handleReset = () => {
    setPaused(false);
    setPlaying(false);
    setScore(0);
  };

  const handlePause = () => {
    setPlaying(false);
    setPaused(true);
  };

  return (
    <header>
      <h1>React-A-Mole!</h1>
      <div className="scoreboard">
        {!paused ? (
          <h3>Score: {score}</h3>
        ) : (
          <h3 className="paused">GAME PAUSED!</h3>
        )}
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </header>
  );
}

export default Header;
