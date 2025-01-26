import React from "react";
import Game from "./components/Game";
import { useRound } from "./context/Round";
import { useColorContext } from "./context/ColorContext";
import { useStartGame } from "./context/StartGame";

const App: React.FC = () => {
  const [score, setScore] = React.useState<number>(0);
  const [bestScore, setBestScore] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(false);

  const { setRound } = useRound();
  const { handleColor } = useColorContext();
  const { setStartGame } = useStartGame();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-dvh">
        <h1 className="font-black text-3xl mb-5">Color Game</h1>
        <Game
          setScore={setScore}
          setGameOver={setGameOver}
          setBestScore={setBestScore}
        />
        <h3 className="mt-2">Score: {score}</h3>
        {bestScore !== 0 && <h3>Best Score: {bestScore}</h3>}
        {gameOver && (
          <div className="flex flex-col items-center justify-center w-full h-full fixed top-0 left-0 bg-white bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-4 rounded text-center">
              <h2 className="font-bold text-2xl">Game Over</h2>
              <h3>Score: {score}</h3>
              <h3>Best Score: {bestScore}</h3>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setScore(0);
                  setGameOver(false);
                  setRound(0);
                  setStartGame(false);
                  handleColor();
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
