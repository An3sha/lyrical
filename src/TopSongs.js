import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";

const fetchSongCover = async (songName) => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${songName}&limit=1`
  );
  const data = await response.json();
  return data.results[0]?.artworkUrl100;
};

// Mock function to fetch top songs (replace with an actual API)
const fetchTopSongs = () => {
  return [
    "Blinding Lights - The Weeknd",
    "Save Your Tears - The Weeknd",
    "Levitating - Dua Lipa",
    "Good 4 U - Olivia Rodrigo",
    "Kiss Me More - Doja Cat",
    "Stay - Kid LAROI & Justin Bieber",
    "Montero (Call Me By Your Name) - Lil Nas X",
    "Industry Baby - Lil Nas X & Jack Harlow",
    "Shivers - Ed Sheeran",
    "Easy On Me - Adele",
  ];
};

const TopSongs = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [covers, setCovers] = useState({});

  useEffect(() => {
    const songs = fetchTopSongs();
    setTopSongs(songs);

    const fetchCovers = async () => {
      const songCoverUrls = {};
      for (const song of songs) {
        const coverUrl = await fetchSongCover(song);
        songCoverUrls[song] = coverUrl;
      }
      setCovers(songCoverUrls);
    };

    fetchCovers();
  }, []);

  return (
    <div className="top-songs-section" style={{ padding: "20px" }}>
      <h1 className="heading">top 10 songs 🎶</h1>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {topSongs.map((song, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="song-card">
              <CardContent>
                {covers[song] ? (
                  <img
                    src={covers[song]}
                    alt={song}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: "10px",
                    }}
                  />
                ) : (
                  <div>Loading cover...</div>
                )}
                <h5 className="heading">{song}</h5>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopSongs;
