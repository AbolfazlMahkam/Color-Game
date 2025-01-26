import React from "react";

interface BrightnessContextType {
  brightness: number;
  setBrightness: React.Dispatch<React.SetStateAction<number>>;
}

const BrightnessContext = React.createContext<BrightnessContextType | null>(
  null
);

interface BrightnessProviderProps {
  children: React.ReactNode;
}

export const BrightnessProvider: React.FC<BrightnessProviderProps> = ({
  children,
}) => {
  const [brightness, setBrightness] = React.useState<number>(130);

  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </BrightnessContext.Provider>
  );
};

export const useBrightness = (): BrightnessContextType => {
  const context = React.useContext(BrightnessContext);
  if (!context) {
    throw new Error("useBrightness must be used within a BrightnessProvider");
  }
  return context;
};
