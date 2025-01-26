import React from "react";

interface RoundContextType {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

const RoundContext = React.createContext<RoundContextType | null>(null);

interface RoundProviderProps {
  children: React.ReactNode;
}

export const RoundProvider: React.FC<RoundProviderProps> = ({ children }) => {
  const [round, setRound] = React.useState<number>(0);

  return (
    <RoundContext.Provider value={{ round, setRound }}>
      {children}
    </RoundContext.Provider>
  );
};

export const useRound = (): RoundContextType => {
  const context = React.useContext(RoundContext);
  if (!context) {
    throw new Error("useRound must be used within a RoundProvider");
  }
  return context;
};
