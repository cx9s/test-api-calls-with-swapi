import React, { useState, useEffect } from "react";
import { Char } from "./char";
import Character from "./character";

const FetchCharacter: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [error, setError] = useState<Error | null>();
  const [character, setCharacter] = useState<Char | null>();
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonText = buttonClicked ? "Ok" : "Fetch character";

  const getCharacter = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      const char = (await response.json()) as Char;
      setCharacter(char);
    } catch (e) {
      setError(e as Error);
    } finally {
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
      {error && (
        <>
          <h2>Error</h2>
          <p role="alert">{error.toString()}</p>
        </>
      )}
    </div>
  );
};

export default FetchCharacter;
