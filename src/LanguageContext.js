// LanguageContext.js

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // English translations here
    home: 'Home',
    services: 'Services',
    bookNow: 'Book Now',
    welcomeTitle: 'Welcome to Football Sensations!',
    welcomeParagraph1: 'This is all about having fun. Football Sensations\' goal is to give a chance to regulars/unexperienced/veterans',
    welcomeParagraph2: 'of the sport who have been wanting to play Football but have not been able to find a league allowing them',
    welcomeParagraph3: 'to do so. We offer a variety of services which include different types of training sessions as well as three',
    welcomeParagraph4: 'different leagues: flag football, touch football, and tackle football.',
    locationTitle: 'Location',
    locationAddress1: '11 D-Block Way',
    locationAddress2: 'Ottawa, ON K15 T6E',
    phoneTitle: 'Phone',
    phoneNumber: '613-233-2323',
    hoursTitle: 'Hours',
    hoursInfo: 'Mon-Sun 10AM-10PM',
   
    // ... add more translations for English
  },
  fr: {
    // French translations here
    home: 'Accueil',
    services: 'Services',
    fields: 'Terrains',
    bookNow: 'Réservation',
    welcomeTitle: 'Bienvenue chez Football Sensations !',
    welcomeParagraph1: 'Il s\'agit de s\'amuser. L\'objectif de Football Sensations est de donner une chance aux habitués/débutants/vétérans',
    welcomeParagraph2: 'du sport qui ont envie de jouer au football mais n\'ont pas pu trouver de ligue qui leur permette',
    welcomeParagraph3: 'de le faire. Nous proposons une variété de services comprenant différents types de séances d\'entraînement ainsi que trois',
    welcomeParagraph4: 'ligues différentes : football flag, football touch et football américain.',
    locationTitle: 'Emplacement',
    locationAddress1: '11 D-Block Way',
    locationAddress2: 'Ottawa, ON K15 T6E',
    phoneTitle: 'Téléphone',
    phoneNumber: '613-233-2323',
    hoursTitle: 'Heures',
    hoursInfo: 'Lun-Dim 10h-22h',
    // ... add more translations for French
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const translate = (key) => {
    const translation = translations[language][key];
    return translation || key; // Return the key as fallback if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
