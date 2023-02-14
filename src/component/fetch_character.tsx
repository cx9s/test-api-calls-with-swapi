import React, { useState, useEffect } from "react";
import { Char } from "./char";
import Character from "./character";

const initialState = {
  error: null,
  character: null,
};

const FetchCharacter: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [error, setError] = useState<any>(initialState.error);
  const [character, setCharacter] = useState<Char | null>(
    initialState.character
  );
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonText = buttonClicked ? "Ok" : "Fetch character";

  const getCharacter = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      const char = (await response.json()) as Char;
      setCharacter(char);
      setButtonClicked(true);
    } catch (e) {
      setError(e);
      setButtonClicked(true);
    }
  };

  return (
    <div>
      <p>
        <button onClick={() => getCharacter(apiUrl)} disabled={buttonClicked}>
          {buttonText}
        </button>
      </p>
      {character && <Character character={character} />}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
};

export default FetchCharacter;
