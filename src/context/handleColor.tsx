import React from "react";
import ColorContext from "./ColorContext";
import { useRound } from "./Round";
import { useColum } from "./Colum";
import { useRow } from "./Row";
import { useBrightness } from "./Brightness";
import { useTargetIndex } from "./TargetIndex";
import { useStartGame } from "./StartGame";

interface ColorProviderProps {
  children: React.ReactNode;
}

const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const { round, setRound } = useRound();
  const { col, setCol } = useColum();
  const { row, setRow } = useRow();
  const { brightness, setBrightness } = useBrightness();
  const { targetIndex, setTargetIndex } = useTargetIndex();
  const {setStartGame} = useStartGame();

  const [mainColor, setMainColor] = React.useState<string>("");

  const colors: string[] = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-lime-500",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-fuchsia-500",
    "bg-violet-500",
  ];

  const handleColor = () => {
    setStartGame(true)
    setCol(4);
    setRow(4)
    if (0 <= round && round <= 4) {
      setRound((prevRound) => prevRound + 1);
    } else if (5 <= round && round <= 9) {
      setRound((prevRound) => prevRound + 1);
      setCol(5);
      setRow(5);
      setBrightness(125);
    } else if (10 <= round && round <= 14) {
      setRound((prevRound) => prevRound + 1);
      setCol(6);
      setRow(6);
      setBrightness(120);
    } else if (15 <= round && round <= 19) {
      setRound((prevRound) => prevRound + 1);
      setCol(7);
      setRow(7);
      setBrightness(115);
    } else if (20 <= round && round <= 24) {
      setRound((prevRound) => prevRound + 1);
      setCol(8);
      setRow(8);
      setBrightness(110);
    } else if (25 <= round && round <= 29) {
      setRound((prevRound) => prevRound + 1);
      setCol(9);
      setRow(9);
      setBrightness(105);
    } else if (round === 30) {
      setRound(0);
      setCol(4);
      setRow(4);
      setBrightness(130);
    }

    console.log(round);

    const randomColor: string =
      colors[Math.floor(Math.random() * colors.length)];
    const randomIndex: number = Math.floor(Math.random() * (row * col));

    setMainColor(randomColor);
    setTargetIndex(randomIndex);
  };

  return (
    <ColorContext.Provider
      value={{
        round,
        col,
        row,
        brightness,
        mainColor,
        targetIndex,
        handleColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
