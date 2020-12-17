import React, { useState } from "react";
import "./styles.css";

const bands = {
  Rock: [
    { name: "Green Day", bestSong: "21 Guns", rating: "4/5" },
    { name: "Linkin Park", bestSong: "Numb", rating: "5/5" },
    {
      name: "Apocalypse Orchestra",
      bestSong: "The Garden of Earthly Delights",
      rating: " 3/5"
    }
  ],
  Metal: [
    { name: "Avenged Sevenfold", bestSong: "Hail to the king", rating: "4/5" },
    { name: "Slipknot", bestSong: "Duality", rating: "3/5" },
    { name: "Ghost", bestSong: "He is", rating: " 3/5" }
  ],
  Classic: [
    { name: "Queen", bestSong: "Bohemian Rhapsody", rating: "5/5" },
    { name: "AC/DC", bestSong: "Highway to Hell", rating: "5/5" },
    { name: "The Beatles", bestSong: "Hey Jude", rating: " 5/5" }
  ]
};

let bandGeneres = Object.keys(bands);

export default function App() {
  const [bandState, setBandState] = useState(bands.Rock);

  function clickEventListner(bandGeneres) {
    // console.log(bandGeneres);
    let userInput = bands[bandGeneres];
    //console.log(userInput.name, userInput.bestSong, userInput.rating);
    setBandState(userInput);
  }

  return (
    <div className="App">
      <h1 className="heading">Rock of Ages</h1>
      <div className="btn">
        {bandGeneres.map((bandGeneres) => {
          return (
            <button onClick={() => clickEventListner(bandGeneres)}>
              {bandGeneres}
            </button>
          );
        })}
      </div>
      <div className="band-list-total">
        {bandState.map((bandGeneres) => {
          return (
            <div className="band-list">
              <p className="band-name name">Artist: {bandGeneres.name}</p>
              <p className="band-name bestsong">
                Best Songs: {bandGeneres.bestSong}
              </p>
              <p className="band-name rating">Rating: {bandGeneres.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
