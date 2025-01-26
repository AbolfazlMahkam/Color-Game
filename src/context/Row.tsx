import React from "react";

interface RowContextType {
  row: number;
  setRow: React.Dispatch<React.SetStateAction<number>>;
}

const RowContext = React.createContext<RowContextType | null>(null);

interface RowProviderProps {
  children: React.ReactNode;
}

export const RowProvider: React.FC<RowProviderProps> = ({ children }) => {
  const [row, setRow] = React.useState<number>(4);

  return (
    <RowContext.Provider value={{ row, setRow }}>
      {children}
    </RowContext.Provider>
  );
};

export const useRow = (): RowContextType => {
  const context = React.useContext(RowContext);
  if (!context) {
    throw new Error("useRow must be used within a RowProvider");
  }
  return context;
};
