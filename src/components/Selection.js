import React, { useState } from 'react';

const Selection = ({ currentColor }) => {
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    setBgColor(currentColor);
  }

  return (
    <div className="fix-box" style={{ background: bgColor }} onClick={handleClick}>
      <h3>Selection</h3>
    </div>
  )
}

export default Selection;
