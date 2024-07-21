import { useReducer, useCallback, useRef, useEffect } from "react";
import { GameState, GameAction } from "../types";
import {
  createEmptyGrid,
  createRandomGrid,
  getNextGridState,
} from "../utils/gameLogic";

const initialState: GameState = {
  grid: createEmptyGrid(),
  isRunning: false,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "SET_GRID":
      return { ...state, grid: action.payload };
    case "SET_RUNNING":
      return { ...state, isRunning: action.payload };
    case "TOGGLE_CELL": {
      const { i, j } = action.payload;
      const newGrid = state.grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) =>
          rowIndex === i && cellIndex === j ? !cell : cell
        )
      );
      return { ...state, grid: newGrid };
    }
    case "RANDOMIZE":
      return { ...state, grid: createRandomGrid() };
    case "CLEAR":
      return { ...state, grid: createEmptyGrid() };
    default:
      return state;
  }
};

export const useGameOfLife = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const runningRef = useRef(state.isRunning);
  const gridRef = useRef(state.grid);

  useEffect(() => {
    gridRef.current = state.grid;
  }, [state.grid]);

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    dispatch({ type: "SET_GRID", payload: getNextGridState(gridRef.current) });
    requestAnimationFrame(runSimulation);
  }, []);

  useEffect(() => {
    runningRef.current = state.isRunning;
    if (state.isRunning) {
      runSimulation();
    }
  }, [state.isRunning, runSimulation]);

  const toggleCell = (i: number, j: number) => {
    dispatch({ type: "TOGGLE_CELL", payload: { i, j } });
  };

  const startStopSimulation = () => {
    dispatch({ type: "SET_RUNNING", payload: !state.isRunning });
  };

  const randomizeGrid = () => {
    dispatch({ type: "RANDOMIZE" });
  };

  const clearGrid = () => {
    dispatch({ type: "CLEAR" });
  };

  return {
    grid: state.grid,
    isRunning: state.isRunning,
    toggleCell,
    startStopSimulation,
    randomizeGrid,
    clearGrid,
  };
};
