import React from "react";

interface StartGameContextType {
  startGame: boolean;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartGameContext = React.createContext<StartGameContextType | null>(null);

interface StartGameProviderProps {
  children: React.ReactNode;
}

export const StartGameProvider: React.FC<StartGameProviderProps> = ({
  children,
}) => {
  const [startGame, setStartGame] = React.useState<boolean>(false);

  return (
    <StartGameContext.Provider value={{ startGame, setStartGame }}>
      {children}
    </StartGameContext.Provider>
  );
};

export const useStartGame = (): StartGameContextType => {
  const context = React.useContext(StartGameContext);
  if (!context) {
    throw new Error("useStartGame must be used within a StartGameProvider");
  }
  return context;
};
