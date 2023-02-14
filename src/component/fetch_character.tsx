import React, { useState, useEffect } from "react";
import { Char } from "./char";
import Character from "./character";

const initialState = {
  error: null,
  character: null,
};

const FetchCharacter: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [error, setError] = useState<string | null>(initialState.character);
  const [character, setCharacter] = useState<Char | null>(initialState.error);

  const getCharacter = async (apiUrl: string) => {
    const response = await fetch(apiUrl);
    const char = (await response.json()) as Char;
    setCharacter(char);
  };

  useEffect(() => {
    getCharacter(apiUrl);
  }, [character]);

  return <div>{character && <Character character={character} />}</div>;
};

export default FetchCharacter;
