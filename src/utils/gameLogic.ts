import { Grid, CellState } from "../types";

export const GRID_SIZE = 30;

export const createEmptyGrid = (): Grid =>
  Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(false));

export const createRandomGrid = (): Grid =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => Math.random() > 0.7)
  );

export const countNeighbors = (grid: Grid, i: number, j: number): number => {
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) continue;
      const newI = i + x;
      const newJ = j + y;
      if (newI >= 0 && newI < GRID_SIZE && newJ >= 0 && newJ < GRID_SIZE) {
        count += grid[newI][newJ] ? 1 : 0;
      }
    }
  }
  return count;
};

export const getNextCellState = (
  currentState: CellState,
  neighbors: number
): CellState => {
  if (currentState) {
    return neighbors === 2 || neighbors === 3;
  } else {
    return neighbors === 3;
  }
};

export const getNextGridState = (currentGrid: Grid): Grid => {
  return currentGrid.map((row, i) =>
    row.map((cell, j) => {
      const neighbors = countNeighbors(currentGrid, i, j);
      return getNextCellState(cell, neighbors);
    })
  );
};
