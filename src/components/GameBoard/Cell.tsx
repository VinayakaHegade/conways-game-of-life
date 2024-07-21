import React from "react";

interface CellProps {
  isAlive: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = React.memo(function Cell({
  isAlive,
  onClick,
}) {
  return (
    <div
      className={`w-5 h-5 rounded-sm transition-colors duration-200 ease-in-out ${
        isAlive ? "bg-blue-500" : "bg-gray-200"
      }`}
      onClick={onClick}
    />
  );
});

export default Cell;
