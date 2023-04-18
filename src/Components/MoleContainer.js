import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer({ score, setScore }) {
  let [displayMole, setDisplayMole] = useState(false);

  const addPoint = () => {
    setScore((prevScore) => prevScore + 1);
    setDisplayMole(false);
  };

  const removePoint = () => {
    if (score > 0) {
      setScore((prevScore) => prevScore - 1);
    }
  };

  let moleDisplay = displayMole ? (
    <Mole setDisplayMole={setDisplayMole} addPoint={addPoint} />
  ) : (
    <EmptySlot setDisplayMole={setDisplayMole} removePoint={removePoint} />
  );

  return <>{moleDisplay}</>;
}

export default MoleContainer;
