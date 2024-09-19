// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:info@yourcompany.com" className="hover:text-gray-400">info@yourcompany.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;