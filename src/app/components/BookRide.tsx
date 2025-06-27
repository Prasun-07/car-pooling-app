'use client';

import { useState } from 'react';
import InputSection from './InputSection';
import RideCard from './RideCard';
import { supabase } from '../../../lib/supabaseClient';

type Coords = {
  lat: number;
  lng: number;
};

type Ride = {
  id: string;
  start: string;
  end: string;
  date: string;
  time: string;
  pay: number;
  contact: string;
  start_lat: number;
  start_lng: number;
  end_lat: number;
  end_lng: number;
};

export default function BookRide() {
  const [start, setStart] = useState('');
  const [startCoords, setStartCoords] = useState<Coords | null>(null);
  const [results, setResults] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(false);

  const haversineDistance = (coord1: Coords, coord2: Coords) => {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371;

    const dLat = toRad(coord2.lat - coord1.lat);
    const dLng = toRad(coord2.lng - coord1.lng);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(coord1.lat)) *
        Math.cos(toRad(coord2.lat)) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000;
  };

  const handleSearchNearby = async () => {
    if (!startCoords) {
      alert('Please enter a start location.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('car_pooling_driver_data')
      .select('*');

    if (error) {
      console.error('Supabase fetch error:', error.message);
      alert('Failed to fetch rides.');
      setLoading(false);
      return;
    }

    const filtered = data.filter((ride) => {
      const rideStartCoords = {
        lat: ride.start_lat,
        lng: ride.start_lng,
      };
      const distance = haversineDistance(startCoords, rideStartCoords);
      return distance <= 500;
    });

    setResults(filtered);
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8">
        <InputSection
          type="start"
          input={start}
          setInput={setStart}
          setLatLng={setStartCoords}
        />

        <button
          onClick={handleSearchNearby}
          className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-[#b4693e] to-[#9e6a4f] 
                  text-white text-lg md:text-xl font-semibold rounded-xl 
                    shadow-[0_4px_0_0_#7b3f2c] hover:shadow-[0_2px_0_0_#7b3f2c] 
                    active:translate-y-[4px] active:shadow-none transition-all duration-150 ease-in-out"
        >
          Search Ride
        </button>
      </div>

      {loading ? (
        <p className="text-[#7b3f2c] text-center mt-10 text-lg font-medium animate-pulse">
          Searching nearby rides...
        </p>
      ) : results.length > 0 ? (
        <div className="mt-10 space-y-6 animate-fade-in-up">
          {results.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10 text-md italic">
          No nearby rides found.
        </p>
      )}
    </div>
  );
}
