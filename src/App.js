import React, { useState } from "react";
import SongSearch from "./SongSearch";
import TopSongs from "./TopSongs";
import "./App.css";

const App = () => {
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="App">
      <SongSearch setError={setError} setLyrics={setLyrics} />
      {error && <div className="error">{error}</div>}
      {lyrics && (
        <div className="lyrics">
          <pre>{lyrics}</pre>
        </div>
      )}
      <TopSongs />
    </div>
  );
};

export default App;
