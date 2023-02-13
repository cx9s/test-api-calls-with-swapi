import React from "react";
import { Character } from "./character";

const CharacterBox: React.FC<{ character: Character }> = ({ character }) => {
  const { name, height, gender, homeworld, url } = character;
  return (
    <div className="App">
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Gender: {gender}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Url: {url}</p>
    </div>
  );
};

export default CharacterBox;
