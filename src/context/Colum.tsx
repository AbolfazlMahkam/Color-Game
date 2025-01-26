import React from "react";

interface ColumContextType {
  col: number;
  setCol: React.Dispatch<React.SetStateAction<number>>;
}

const ColumContext = React.createContext<ColumContextType | null>(null);

interface ColumProviderProps {
  children: React.ReactNode;
}

export const ColumProvider: React.FC<ColumProviderProps> = ({ children }) => {
  const [col, setCol] = React.useState<number>(4);

  return (
    <ColumContext.Provider value={{ col, setCol }}>
      {children}
    </ColumContext.Provider>
  );
};

export const useColum = (): ColumContextType => {
  const context = React.useContext(ColumContext);
  if (!context) {
    throw new Error("useColum must be used within a ColumProvider");
  }
  return context;
};
