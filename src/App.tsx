import React, { useEffect, useState } from "react";
import "./App.css";
import CharacterBox from "./component/character_box";
import { Character } from "./component/character";

function App() {
  const [character, setCharacter] = useState<Character>();

  const getCharacter = async (id: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const char = (await response.json()) as Character;
    setCharacter(char);
  };

  useEffect(() => {
    getCharacter(1);
  }, [character]);

  return (
    <div className="App">
      <h1>Testing API calls in React with the SWAPI API</h1>
      {character && <CharacterBox character={character} />}
    </div>
  );
}

export default App;
