import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCrad from './WordCrad';

const word = "youtube";
function App() {
  return (
    <div>
      <h1>Word </h1>
      <WordCrad value={word}/>
      <div>
        <marquee>Wellcome to WORD GAME</marquee>
      </div>
    </div>
  );
}

export default App;
