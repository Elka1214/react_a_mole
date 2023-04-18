import React, { useEffect } from "react";

function Mole({ setDisplayMole, addPoint }) {
  useEffect(() => {
    let random = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => setDisplayMole(false), random);

    return () => clearTimeout(timer);
  });

  return (
    <div className="moleContainer">
      <img
        className="moleImage"
        onClick={addPoint}
        src="./images/mole.png"
        alt="mole"
      />
    </div>
  );
}

export default Mole;
