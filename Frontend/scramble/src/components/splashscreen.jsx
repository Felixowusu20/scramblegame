// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Stack,
//   ToggleButton,
//   ToggleButtonGroup,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   useMediaQuery,
//   useTheme,
//   GlobalStyles,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const backgroundImageUrl =
//   'https://images-rsg.storage.googleapis.com/wp-content/uploads/2023/10/Mystical-Landscape-Game-Background-by-Gaming-Backgrounds-Art-Outsourcing.jpg';

// const SplashScreen = ({ onStart }) => {
//   const [difficulty, setDifficulty] = useState('medium');
//   const [showManual, setShowManual] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleDifficultyChange = (_, newDiff) => {
//     if (newDiff !== null) setDifficulty(newDiff);
//   };

//   return (
//     <>
//       {/* Global style to ensure no scrollbars anywhere */}
//       <GlobalStyles
//         styles={{
//           html: { height: '100%', overflow: 'hidden' },
//           body: { height: '100%', margin: 0, overflow: 'hidden' },
//           '#root': { height: '100%' },
//         }}
//       />

//       <Box
//         sx={{
//           position: 'relative',
//           height: '100vh',
//           width: '100%',
//           overflow: 'hidden',
//         }}
//       >
//         {/* Background image */}
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage: `url(${backgroundImageUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             zIndex: 0,
//           }}
//         />

//         {/* Overlay content */}
//         <Box
//           sx={{
//             position: 'relative',
//             zIndex: 1,
//             height: '100%',
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             px: 2,
//           }}
//         >
//           <Box
//             sx={{
//               backdropFilter: 'blur(10px)',
//               backgroundColor: 'rgba(0, 0, 0, 0.65)',
//               borderRadius: 4,
//               p: isMobile ? 3 : 5,
//               maxWidth: 420,
//               width: '100%',
//               textAlign: 'center',
//               color: '#fff',
//             }}
//           >
//             <Typography
//               variant={isMobile ? 'h5' : 'h4'}
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 color: '#FF6F00',
//                 textShadow: '1px 1px 4px #000',
//               }}
//             >
//               🎮 WordScrambleX
//             </Typography>

//             <Typography
//               variant="body2"
//               mb={3}
//               fontSize={isMobile ? '0.9rem' : '1rem'}
//               sx={{ color: '#FFA726' }}
//             >
//               Unscramble tricky words, rise through levels, and win rewards!
//               OGAMES challenges your brain the fun way.
//             </Typography>

//             <Stack direction="column" spacing={2} alignItems="center">
//               <ToggleButtonGroup
//                 value={difficulty}
//                 exclusive
//                 onChange={handleDifficultyChange}
//                 color="primary"
//                 size="small"
//                 sx={{
//                   bgcolor: '#FFF3E0',
//                   borderRadius: 1,
//                   '& .Mui-selected': {
//                     backgroundColor: '#FF6F00 !important',
//                     color: 'white',
//                   },
//                 }}
//               >
//                 <ToggleButton value="low">Low</ToggleButton>
//                 <ToggleButton value="medium">Medium</ToggleButton>
//                 <ToggleButton value="high">High</ToggleButton>
//               </ToggleButtonGroup>

//               <Button
//                 variant="contained"
//                 size="large"
//                 onClick={() => onStart(difficulty)}
//                 sx={{
//                   backgroundColor: '#FF6F00',
//                   color: 'white',
//                   px: 4,
//                   py: 1,
//                   fontWeight: 'bold',
//                   fontSize: isMobile ? '0.9rem' : '1rem',
//                   '&:hover': {
//                     backgroundColor: '#E65100',
//                     boxShadow: '0 0 10px #FF6F00',
//                   },
//                 }}
//               >
//                 🚀 Start Game
//               </Button>

//               <Button
//                 variant="outlined"
//                 color="warning"
//                 onClick={() => setShowManual(true)}
//                 sx={{
//                   borderColor: '#FFA726',
//                   color: '#FFA726',
//                   fontWeight: 'bold',
//                   fontSize: isMobile ? '0.85rem' : '1rem',
//                   '&:hover': {
//                     backgroundColor: '#FFF3E0',
//                   },
//                 }}
//               >
//                 📘 How to Play
//               </Button>
//             </Stack>
//           </Box>
//         </Box>

//         {/* Manual Dialog */}
//         <Dialog open={showManual} onClose={() => setShowManual(false)}>
//           <DialogTitle>📘 How to Play WordScrambleX</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               <strong>1.</strong> Unscramble the word shown.<br />
//               <strong>2.</strong> You have 2 hints per word.<br />
//               <strong>3.</strong> If still wrong, wait 30 seconds for the answer.<br />
//               <strong>4.</strong> Score higher to level up!<br />
//               <strong>5.</strong> Reach 100% to win $0.2 in BTC.<br />
//               <strong>6.</strong> Adjust difficulty anytime.
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//       </Box>
//     </>
//   );
// };

// export default SplashScreen;

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useMediaQuery,
  useTheme,
  GlobalStyles,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const backgroundImageUrl =
  'https://images-rsg.storage.googleapis.com/wp-content/uploads/2023/10/Mystical-Landscape-Game-Background-by-Gaming-Backgrounds-Art-Outsourcing.jpg';

const SplashScreen = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const [showManual, setShowManual] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); // 👈 use navigate

  const handleDifficultyChange = (_, newDiff) => {
    if (newDiff !== null) setDifficulty(newDiff);
  };

  const handleStartGame = () => {
    navigate('/play', { state: { difficulty } }); // 👈 pass difficulty via state
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
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
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
              sx={{
                color: '#FF6F00',
                textShadow: '1px 1px 4px #000',
              }}
            >
              🎮 WordScrambleX
            </Typography>

            <Typography
              variant="body2"
              mb={3}
              fontSize={isMobile ? '0.9rem' : '1rem'}
              sx={{ color: '#FFA726' }}
            >
              Unscramble tricky words, rise through levels, and win rewards!
              OGAMES challenges your brain the fun way.
            </Typography>

            <Stack direction="column" spacing={2} alignItems="center">
              <ToggleButtonGroup
                value={difficulty}
                exclusive
                onChange={handleDifficultyChange}
                color="primary"
                size="small"
                sx={{
                  bgcolor: '#FFF3E0',
                  borderRadius: 1,
                  '& .Mui-selected': {
                    backgroundColor: '#FF6F00 !important',
                    color: 'white',
                  },
                }}
              >
                <ToggleButton value="low">Low</ToggleButton>
                <ToggleButton value="medium">Medium</ToggleButton>
                <ToggleButton value="high">High</ToggleButton>
              </ToggleButtonGroup>

              <Button
                variant="contained"
                size="large"
                onClick={handleStartGame}
                sx={{
                  backgroundColor: '#FF6F00',
                  color: 'white',
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  '&:hover': {
                    backgroundColor: '#E65100',
                    boxShadow: '0 0 10px #FF6F00',
                  },
                }}
              >
                🚀 Start Game
              </Button>

              <Button
                variant="outlined"
                color="warning"
                onClick={() => setShowManual(true)}
                sx={{
                  borderColor: '#FFA726',
                  color: '#FFA726',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  '&:hover': {
                    backgroundColor: '#FFF3E0',
                  },
                }}
              >
                📘 How to Play
              </Button>
            </Stack>
          </Box>
        </Box>

        <Dialog open={showManual} onClose={() => setShowManual(false)}>
          <DialogTitle>📘 How to Play WordScrambleX</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>1.</strong> Unscramble the word shown.<br />
              <strong>2.</strong> You have 2 hints per word.<br />
              <strong>3.</strong> If still wrong, wait 30 seconds for the answer.<br />
              <strong>4.</strong> Score higher to level up!<br />
              <strong>5.</strong> Reach 100% to win $0.2 in BTC.<br />
              <strong>6.</strong> Adjust difficulty anytime.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default SplashScreen;
