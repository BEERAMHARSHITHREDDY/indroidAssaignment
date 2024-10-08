// components/Player/Player.js
import React from 'react';

const Player = ({ name, score }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Score: {score}</p>
    </div>
  );
};

export default Player;