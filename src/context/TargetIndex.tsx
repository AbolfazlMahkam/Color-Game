import React from "react";

interface TargetIndexContextType {
  targetIndex: number;
  setTargetIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TargetIndexContext = React.createContext<TargetIndexContextType | null>(
  null
);

interface TargetIndexProviderProps {
  children: React.ReactNode;
}

export const TargetIndexProvider: React.FC<TargetIndexProviderProps> = ({
  children,
}) => {
  const [targetIndex, setTargetIndex] = React.useState<number>(0);

  return (
    <TargetIndexContext.Provider value={{ targetIndex, setTargetIndex }}>
      {children}
    </TargetIndexContext.Provider>
  );
};

export const useTargetIndex = (): TargetIndexContextType => {
  const context = React.useContext(TargetIndexContext);
  if (!context) {
    throw new Error("useTargetIndex must be used within a TargetIndexProvider");
  }
  return context;
};
