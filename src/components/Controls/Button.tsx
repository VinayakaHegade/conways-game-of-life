import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color: "blue" | "green" | "red";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
  const baseClasses =
    "px-4 py-2 text-white rounded hover:opacity-80 transition-colors";
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };

  return (
    <button
      className={`${baseClasses} ${colorClasses[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
