import React, { useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SongSearch = ({ setError, setLyrics }) => {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleSearch = async () => {
    if (!song || !artist) {
      setError("Please enter both song name and artist.");
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      );
      setLyrics(response.data.lyrics);
    } catch (err) {
      setError("Lyrics not found or an error occurred.");
      setLyrics("");
    }
  };

  return (
    <Box className="lyrics-box">
      <div className="lyrics-container">
        <h1>search your song lyrics</h1>
        <div>
          <input
            type="text"
            placeholder="Song name"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <input
            type="text"
            placeholder="Artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </Box>
  );
};

export default SongSearch;
