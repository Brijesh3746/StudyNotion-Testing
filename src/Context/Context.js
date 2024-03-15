import React, { createContext, useState, useContext } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {

    const [white, setWhite] = useState(false);

    const value = {
      white,setWhite,
    };

// Custom hook to use the context
return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}