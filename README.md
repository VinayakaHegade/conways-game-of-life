# Conway's Game of Life

This project is an implementation of [Conway's Game of Life](https://playgameoflife.com) using Vite, React, TypeScript, and Tailwind CSS. It features a intuitive controls for an engaging user experience.

## Features

- 30x30 grid implementation of Conway's Game of Life
- Start/Stop functionality to control the simulation
- Randomize button to generate random initial states
- Clear button to reset the grid
- Interactive cells - click to toggle their state

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/conways-game-of-life.git
cd conways-game-of-life
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Project Structure

- `src/`: Source files for the application
  - `components/`: Contains all React components, organized by feature and function
    - `GameBoard/`: Components related to the game board
    - `Controls/`: UI control components
  - `hooks/`: Custom React hooks for managing state and side effects
  - `utils/`: Utility functions, including core game logic
  - `types/`: TypeScript type definitions shared across the application
  - `styles/`: Global styles and CSS configurations
  - `App.tsx`: Main application component
  - `main.tsx`: Entry point of the application
- `public/`: Static assets
- `vite.config.ts`: Vite configuration file
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts
- `index.html`: HTML entry point

