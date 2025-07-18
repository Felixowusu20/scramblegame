// src/pages/GamePlayScreen.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  LinearProgress,
  useMediaQuery,
  useTheme,
  GlobalStyles,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const backgroundImageUrl =
  'https://images-rsg.storage.googleapis.com/wp-content/uploads/2023/10/Mystical-Landscape-Game-Background-by-Gaming-Backgrounds-Art-Outsourcing.jpg';

const GamePlayScreen = ({ difficulty = 'medium' }) => {
  const [scrambledWord, setScrambledWord] = useState('LOADING');
  const [correctWord, setCorrectWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hintCount, setHintCount] = useState(2);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    const simulateWord = {
      original: 'orange',
      scrambled: 'eongra',
    };
    setScrambledWord(simulateWord.scrambled);
    setCorrectWord(simulateWord.original);
    setTimeLeft(30);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFeedback(`⏰ Time's up! Correct word was: ${correctWord}`);
          setTimeout(() => {
            setUserGuess('');
            setFeedback('');
            setHintCount(2);
            setScrambledWord('geanro');
            setCorrectWord('orange');
            setTimeLeft(30);
          }, 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [correctWord]);

  const handleGuess = () => {
    if (userGuess.trim().toLowerCase() === correctWord.toLowerCase()) {
      setFeedback('✅ Correct!');
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setUserGuess('');
        setFeedback('');
        setHintCount(2);
        setScrambledWord('geanro');
        setCorrectWord('orange');
        setTimeLeft(30);
      }, 1000);
    } else {
      setFeedback('❌ Try Again');
    }
  };

  const handleHint = () => {
    if (hintCount > 0) {
      const revealed = correctWord.slice(0, correctWord.length - hintCount);
      setFeedback(`🔍 Hint: starts with "${revealed}"`);
      setHintCount(hintCount - 1);
    } else {
      setFeedback('🚫 No hints left');
    }
  };

  const shuffleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const handleShuffle = () => {
    setScrambledWord(shuffleWord(scrambledWord));
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: { height: '100%', overflow: 'hidden' },
          body: { height: '100%', margin: 0, overflow: 'hidden' },
          '#root': { height: '100%' },
        }}
      />

      <Box
        sx={{
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
          }}
        >
          <Box
            sx={{
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              borderRadius: 4,
              p: isMobile ? 3 : 5,
              maxWidth: 420,
              width: '100%',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              fontWeight="bold"
              gutterBottom
              sx={{ color: '#FF9800' }}
            >
              🧠 Unscramble the Word
            </Typography>

            <LinearProgress
              variant="determinate"
              value={(timeLeft / 30) * 100}
              sx={{ mb: 2, height: 10, borderRadius: 5, backgroundColor: '#fff3e0' }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ letterSpacing: 2 }}
            >
              {scrambledWord.toUpperCase()}
            </Typography>

            <Stack direction="column" spacing={2} alignItems="center" mt={2}>
              <TextField
                label="Your Guess"
                variant="filled"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                fullWidth
                sx={{
                  input: { color: '#fff' },
                  label: { color: '#FF9800' },
                }}
              />

              <Button variant="contained" color="warning" onClick={handleGuess}>
                ✅ Submit
              </Button>

              <Button variant="outlined" color="warning" onClick={handleHint}>
                🔍 Use Hint ({hintCount} left)
              </Button>

              <Button variant="outlined" color="primary" onClick={handleShuffle}>
                🔁 Shuffle
              </Button>

              <Button variant="outlined" color="error" onClick={goBack}>
                🔙 Back to Menu
              </Button>

              <Typography variant="body1">{feedback}</Typography>
              <Typography variant="body2">🎯 Score: {score}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GamePlayScreen;
