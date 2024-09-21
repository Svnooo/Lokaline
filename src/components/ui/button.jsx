import React from 'react';

export const Button = ({ onClick, children, variant = "solid", className }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const variantStyle = variant === "outline"
    ? "border border-gray-500 text-gray-500 bg-white hover:bg-gray-200"
    : "bg-indigo-600 text-white hover:bg-indigo-500";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
};
