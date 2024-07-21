export type CellState = boolean;
export type Grid = CellState[][];

export interface GameState {
  grid: Grid;
  isRunning: boolean;
}

export interface GameAction {
  type: "SET_GRID" | "SET_RUNNING" | "TOGGLE_CELL" | "RANDOMIZE" | "CLEAR";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
