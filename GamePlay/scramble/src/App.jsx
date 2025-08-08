import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePlayScreen from '../src/components/GamePlayScreen';
import SplashScreen from '../src/components/splashscreen';
// import WordScrambleGame from './components/WordScrambleGame';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/play" element={<GamePlayScreen />} />
      </Routes>
    </Router>
  );
};

export default App;

