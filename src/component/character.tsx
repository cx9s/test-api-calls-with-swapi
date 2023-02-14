import React from "react";
import { Char } from "./char";

interface CharacterProps {
  character: Char;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, height, gender, homeworld, url } = character;

  return (
    <>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Gender: {gender}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Url: {url}</p>
    </>
  );
};

export default Character;
