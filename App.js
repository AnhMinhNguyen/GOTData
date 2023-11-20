import React, { useState } from "react";
import { HouseContext } from './data/HouseContext';
import { PersonContext } from "./data/PersonContext";
import MainNavigator from './navigation/MainNavigator';
export default function App() {
  const [clickedHouse, setClickedHouse] = useState('');
  const [clickedPerson, setClickedPerson] = useState('');
  return (
    <HouseContext.Provider value={[clickedHouse, setClickedHouse]}>
      <PersonContext.Provider value={[clickedPerson, setClickedPerson]}>
        <MainNavigator />
      </PersonContext.Provider>
    </HouseContext.Provider>
  );
}

