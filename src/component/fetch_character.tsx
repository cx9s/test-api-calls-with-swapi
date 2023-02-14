import React, { useState } from "react";
import { Char } from "./char";
import Character from "./character";

const FetchCharacter: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [error, setError] = useState<Error | null>();
  const [character, setCharacter] = useState<Char | null>();
  const [buttonClicked, setButtonClicked] = useState(false);

  const getCharacter = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      switch (response.status) {
        case 200: {
          const char = (await response.json()) as Char;
          setCharacter(char);
          setButtonClicked(true);
          break;
        }
        case 404: {
          setError(new Error(`Oops... I cannot find anything`));
          break;
        }
        case 418: {
          setError(new Error(`418 I'm a tea pot 🫖, silly`));
          break;
        }
        case 500: {
          setError(new Error(`Oops... something went wrong, try again 🤕`));
          break;
        }
        default: {
          setError(new Error(`${response.status}`));
        }
      }
    } catch (e) {
      setError(e as Error);
    }
  };

  return (
    <div>
      <p>
        <button onClick={() => getCharacter(apiUrl)} disabled={buttonClicked}>
          {buttonClicked ? "Fetch done" : "Fetch character"}
        </button>
      </p>
      {character && <Character character={character} />}
      {error && (
        <>
          <h2>No character to be shown.</h2>
          <p role="alert">{error.toString()}</p>
        </>
      )}
    </div>
  );
};

export default FetchCharacter;
