import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RoundProvider } from "./context/Round";
import ColorProvider from "./context/handleColor";
import { ColumProvider } from "./context/Colum";
import { RowProvider } from "./context/Row";
import { BrightnessProvider } from "./context/Brightness";
import { TargetIndexProvider } from "./context/TargetIndex";
import { StartGameProvider } from "./context/StartGame";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <RoundProvider>
      <ColumProvider>
        <RowProvider>
          <BrightnessProvider>
            <TargetIndexProvider>
              <StartGameProvider>
                <ColorProvider>
                  <App />
                </ColorProvider>
              </StartGameProvider>
            </TargetIndexProvider>
          </BrightnessProvider>
        </RowProvider>
      </ColumProvider>
    </RoundProvider>
  </React.StrictMode>
);
