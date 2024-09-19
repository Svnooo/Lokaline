// src/components/Content.jsx
import React from 'react';

const Content = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700 mb-6">This is where the main content goes. Customize this as per your need.</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button>
    </main>
  );
};

export default Content;