import React, { useState } from "react";
import "./App.css";
import FetchCharacter from "./component/fetch_character";

function App() {
  const [apiUrl, setApiUrl] = useState<string>(
    `https://swapi.dev/api/people/1`
  );

  return (
    <div className="App">
      <h1>Testing API calls in React with the SWAPI API</h1>
      <FetchCharacter apiUrl={apiUrl} />
    </div>
  );
}

export default App;
