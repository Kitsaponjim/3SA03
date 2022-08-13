import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCrad from './WordCrad';

const word = "Hello";
function App() {
  return (
    <div>
      <WordCrad value={word}/>
    </div>
  );
}

export default App;
