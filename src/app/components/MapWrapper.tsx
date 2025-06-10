'use client';

import { LoadScript, useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import { Coordinates } from '../context/LocationContext';

type MapWrapperProps = {
  startCoords: Coordinates | null;
  endCoords: Coordinates | null;
  onMarkerDrag: (type: 'start' | 'end', coords: Coordinates) => void;
};

export default function MapWrapper({ startCoords, endCoords, onMarkerDrag }: MapWrapperProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <Map
      startCoords={startCoords}
      endCoords={endCoords}
      onMarkerDrag={onMarkerDrag}
    />
  );
}
