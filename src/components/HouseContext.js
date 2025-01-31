import React, { useEffect, useState, createContext } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();


const HouseContextProvider = ({children}) => {
  return (
    <HouseContext.Provider value={console.log('this is the context')}>
      {children}
      </HouseContext.Provider>
  );
};

export default HouseContextProvider;