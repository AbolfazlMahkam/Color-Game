import React from "react";
import { useColum } from "../context/Colum";
import { useRow } from "../context/Row";
import { useBrightness } from "../context/Brightness";
import { useTargetIndex } from "../context/TargetIndex";
import { useColorContext } from "../context/ColorContext";
import { useStartGame } from "../context/StartGame";

interface GameProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setBestScore: React.Dispatch<React.SetStateAction<number>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const Game: React.FC<GameProps> = ({ setScore, setBestScore, setGameOver }) => {
  const [startGameBtn, setStartGameBtn] = React.useState<boolean>(true);
  const [score, setScoreState] = React.useState<number>(0);

  const { startGame, setStartGame } = useStartGame();
  const { col } = useColum();
  const { row } = useRow();
  const { brightness } = useBrightness();
  const { targetIndex } = useTargetIndex();

  const handleStartGame = () => {
    handleColor();
    setStartGameBtn(false);
  };

  const { handleColor, mainColor } = useColorContext();

  const handleClick = (index: number) => {
    if (index === targetIndex) {
      setScore((prevScore) => prevScore + 1);
      setScoreState((prevScore) => prevScore + 1);
      handleColor();
    } else {
      setBestScore((prevBestScore) =>
        prevBestScore < score ? score : prevBestScore
      );
      setGameOver(true);
      setStartGame(false);
    }
  };

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}
    >
      {startGameBtn && (
        <button
          onClick={handleStartGame}
          className={`col-span-${col} p-2 w-40 bg-blue-500 text-white rounded font-bold text-2xl`}
        >
          Start Game
        </button>
      )}

      {startGame &&
        Array.from({ length: row * col }).map((_, index) => (
          <div
            key={index}
            className={`colorStyle ${mainColor}`}
            style={{
              filter: index === targetIndex ? `brightness(${brightness}%)` : "",
            }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
    </div>
  );
};

export default Game;
