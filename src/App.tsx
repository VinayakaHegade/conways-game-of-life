import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Button from "./components/Controls/Button";
import { useGameOfLife } from "./hooks/useGameOfLife";

const App: React.FC = () => {
  const {
    grid,
    isRunning,
    toggleCell,
    startStopSimulation,
    randomizeGrid,
    clearGrid,
  } = useGameOfLife();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Conway's Game of Life
      </h1>
      <GameBoard grid={grid} toggleCell={toggleCell} />
      <div className="mt-6 space-x-4">
        <Button color="blue" onClick={startStopSimulation}>
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button color="green" onClick={randomizeGrid}>
          Randomize
        </Button>
        <Button color="red" onClick={clearGrid}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default App;
