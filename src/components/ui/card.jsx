import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-4 bg-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children }) => {
  return (
    <h2 className="text-xl font-semibold">
      {children}
    </h2>
  );
};

export const CardDescription = ({ children }) => {
  return (
    <p className="text-gray-600">
      {children}
    </p>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};

export const CardFooter = ({ children }) => {
  return (
    <div className="p-4 bg-gray-100 flex justify-between">
      {children}
    </div>
  );
};

