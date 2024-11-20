import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function SongSearch() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState("");

  const handleSearch = async () => {
    if (!song || !artist) {
      setError("please enter both song name and artist");
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      );
      setLyrics(response.data.lyrics);
      setOpen(true);
    } catch (err) {
      setError("lyrics not found or an error occurred.");
      setLyrics("");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="lyrics-box">
      <div className="lyrics-container">
        <h1 className="heading">search your song lyrics</h1>
        <div>
          <input
            type="text"
            placeholder="song name"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <input
            type="text"
            placeholder="artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <button onClick={handleSearch}>search 🔍</button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth className="popup-box">
        <DialogContent className="popup-content">
          {error ? (
            "Error"
          ) : (
            <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
              {error || lyrics || "No lyrics found."}
            </Typography>
          )}
        </DialogContent>
        <DialogActions className="popup-bottom">
          <button onClick={handleClose} className="button">
            Close
          </button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
