'use client';

import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Coordinates } from '../context/LocationContext';
import { useEffect, useState } from 'react';

type MapProps = {
  startCoords: Coordinates | null;
  endCoords: Coordinates | null;
  onMarkerDrag: (type: 'start' | 'end', coords: Coordinates) => void;
};

const containerStyle = {
  width: '100%',
  height: '500px',
};

const centerDefault = {
  lat: 28.6139,
  lng: 77.2090, // Delhi as default
};

export default function Map({ startCoords, endCoords, onMarkerDrag }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', // set in .env.local
    libraries: ['places'],
  });


  const center = startCoords || endCoords || centerDefault;

  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

useEffect(() => {
  if (!startCoords || !endCoords) return;

  const directionsService = new google.maps.DirectionsService();

  directionsService.route(
    {
      origin: startCoords,
      destination: endCoords,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        setDirections(result);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    }
  );
}, [startCoords, endCoords]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {startCoords && (
        <Marker
          position={startCoords}
          draggable
          onDragEnd={(e) =>
            onMarkerDrag('start', {
              lat: e.latLng?.lat() || 0,
              lng: e.latLng?.lng() || 0,
            })
          }
        />
      )}
      {endCoords && (
        <Marker
          position={endCoords}
          draggable
          onDragEnd={(e) =>
            onMarkerDrag('end', {
              lat: e.latLng?.lat() || 0,
              lng: e.latLng?.lng() || 0,
            })
          }
        />
      )}
      {directions && (
        <DirectionsRenderer directions={directions} />
      )}

    </GoogleMap>
  );
}
