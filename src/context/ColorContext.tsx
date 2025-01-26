import React from "react";

interface ColorContextType {
  round: number;
  col: number;
  row: number;
  brightness: number;
  mainColor: string;
  targetIndex: number;
  handleColor: () => void;
}

const ColorContext = React.createContext<ColorContextType | undefined>(
  undefined
);

export const useColorContext = () => {
  const context = React.useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};

export default ColorContext;
