import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);

  const translateText = (enText, idText) => {
    return selectedLanguage === 'en' ? enText : idText;
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translateText }}>
      {children}
    </LanguageContext.Provider>
  );
};
