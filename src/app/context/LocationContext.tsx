'use client'
import React, { createContext, useContext, useState } from 'react';

export type Coordinates = {
  lat: number;
  lng: number;
};

type LocationContextType = {
  startCoords: Coordinates | null;
  endCoords: Coordinates | null;
  updateCoordinates: (type: 'start' | 'end', coords: Coordinates) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [startCoords, setStartCoords] = useState<Coordinates | null>(null);
  const [endCoords, setEndCoords] = useState<Coordinates | null>(null);

  const updateCoordinates = (type: 'start' | 'end', coords: Coordinates) => {
    if (type === 'start') {
      setStartCoords(coords);
    } else {
      setEndCoords(coords);
    }
  };

  return (
    <LocationContext.Provider value={{ startCoords, endCoords, updateCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
