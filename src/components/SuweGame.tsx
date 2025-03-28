'use client';

import React, { useState, useEffect } from 'react';

const COLORS = {
  GREEN: '#008751', // Nigerian green
  WHITE: '#FFFFFF',
  HIGHLIGHT: '#FF9A00', // Orange highlight
};

interface GameSquare {
  id: number;
  isActive: boolean;
  isClicked: boolean;
}

export default function SuweGame() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [squares, setSquares] = useState<GameSquare[]>([]);
  const [gameTimerId, setGameTimerId] = useState<NodeJS.Timeout | null>(null);
  const [activeSquareTimerId, setActiveSquareTimerId] = useState<NodeJS.Timeout | null>(null);

  // Initialize game board
  useEffect(() => {
    // Create initial squares
    const initialSquares = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      isActive: false,
      isClicked: false
    }));
    
    setSquares(initialSquares);
    
    // Cleanup function
    return () => {
      if (gameTimerId) clearInterval(gameTimerId);
      if (activeSquareTimerId) clearInterval(activeSquareTimerId);
    };
  }, [gameTimerId, activeSquareTimerId]);

  const startGame = () => {
    // Reset game state
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(true);
    
    // Reset all squares
    setSquares(squares.map(square => ({
      ...square,
      isActive: false,
      isClicked: false
    })));
    
    // Clear any existing timers
    if (gameTimerId) clearInterval(gameTimerId);
    if (activeSquareTimerId) clearInterval(activeSquareTimerId);
    
    // Start game timer
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          endGame();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    setGameTimerId(timerId);
    
    // Start activating squares
    const squareTimerId = setInterval(() => {
      activateRandomSquare();
    }, 1200);
    
    setActiveSquareTimerId(squareTimerId);
  };

  const endGame = () => {
    // End the game
    setIsGameActive(false);
    
    // Clear timers
    if (gameTimerId) {
      clearInterval(gameTimerId);
      setGameTimerId(null);
    }
    
    if (activeSquareTimerId) {
      clearInterval(activeSquareTimerId);
      setActiveSquareTimerId(null);
    }
    
    // Update high score
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const activateRandomSquare = () => {
    setSquares(prevSquares => {
      // First, deactivate all squares
      const updatedSquares = prevSquares.map(square => ({
        ...square,
        isActive: false
      }));
      
      // Find squares that haven't been clicked
      const availableSquares = updatedSquares.filter(square => !square.isClicked);
      
      // If all squares have been clicked, reset them
      if (availableSquares.length === 0) {
        return updatedSquares.map(square => ({
          ...square,
          isClicked: false
        }));
      }
      
      // Activate a random square
      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      const squareToActivate = availableSquares[randomIndex];
      
      return updatedSquares.map(square => 
        square.id === squareToActivate.id 
          ? { ...square, isActive: true } 
          : square
      );
    });
  };

  const handleSquareClick = (id: number) => {
    if (!isGameActive) return;
    
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        if (square.id === id) {
          // If square is active and not already clicked
          if (square.isActive && !square.isClicked) {
            setScore(prevScore => prevScore + 1);
            return { ...square, isClicked: true };
          }
          // If square is not active and not already clicked
          else if (!square.isActive && !square.isClicked) {
            setScore(prevScore => Math.max(0, prevScore - 1));
            return square;
          }
        }
        return square;
      });
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">Nigerian Suwe Game</h2>
        <p className="text-sm mb-4">Click on the highlighted squares to score points!</p>
        
        <div className="flex justify-between mb-4">
          <div className="bg-white/30 backdrop-blur-sm rounded px-3 py-1">
            <span className="font-bold">Score:</span> {score}
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded px-3 py-1">
            <span className="font-bold">High Score:</span> {highScore}
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded px-3 py-1">
            <span className="font-bold">Time:</span> {timeLeft}s
          </div>
        </div>
        
        {!isGameActive && timeLeft === 30 && (
          <button
            onClick={startGame}
            className="bg-[#008751] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition"
          >
            Start Game
          </button>
        )}
        
        {!isGameActive && timeLeft === 0 && (
          <div className="mb-4">
            <p className="font-bold text-lg mb-2">Game Over!</p>
            <p className="mb-2">Your score: {score}</p>
            <button
              onClick={startGame}
              className="bg-[#008751] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-2 w-full aspect-square">
        {squares.map((square) => (
          <div
            key={square.id}
            onClick={() => handleSquareClick(square.id)}
            className={`
              cursor-pointer rounded-md flex items-center justify-center transition-all duration-200
              ${square.isActive ? 'bg-[#FF9A00]' : square.isClicked ? 'bg-[#008751]/30' : 'bg-[#008751]/10'}
              ${square.isActive ? 'animate-pulse' : ''}
              hover:bg-opacity-80
            `}
            style={{
              border: `2px solid ${COLORS.GREEN}`,
            }}
          >
            {square.isClicked && '✓'}
          </div>
        ))}
      </div>
    </div>
  );
}
