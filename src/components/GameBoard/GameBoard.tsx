import React from "react";
import Cell from "./Cell";
import { Grid } from "../../types";
import { GRID_SIZE } from "../../utils/gameLogic";

interface GameBoardProps {
  grid: Grid;
  toggleCell: (i: number, j: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ grid, toggleCell }) => {
  return (
    <div
      className="grid gap-1 bg-white p-4 rounded-lg shadow-lg"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <Cell
            key={`${i}-${j}`}
            isAlive={cell}
            onClick={() => toggleCell(i, j)}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
