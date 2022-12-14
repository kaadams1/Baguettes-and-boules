import React from 'react';
import './App.css'
import Game from './components/Game';
import bread from './images/many-kinds-of-bread.jpg';


function App() {
  return (
    <div style={{ backgroundImage: `url(${bread})` }}>
      <Game />
    </div>
  );
} 

export default App;