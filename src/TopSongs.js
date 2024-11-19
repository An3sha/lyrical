import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    setTopSongs(fetchTopSongs());
  }, []);

  return (
    <div className="top-songs-section">
      <h2>Top 10 Songs</h2>
      <ul>
        {topSongs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopSongs;
