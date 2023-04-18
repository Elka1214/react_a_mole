import React, { useEffect } from "react";

function EmptySlot({ setDisplayMole, removePoint }) {
  useEffect(() => {
    let random = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => setDisplayMole(true), random);

    return () => clearTimeout(timer);
  });

  return (
    <div className="moleContainer">
      <img
        onClick={removePoint}
        className="moleImage"
        src="./images/molehill.png"
        alt="molehill"
      />
    </div>
  );
}

export default EmptySlot;
