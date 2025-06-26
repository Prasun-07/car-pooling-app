'use client';

import { useState } from 'react';
import InputSection from './InputSection';
import RideCard from './RideCard';
import { supabase } from '../../../lib/supabaseClient';

type Coords = {
  lat: number;
  lng: number;
};

export default function BookRide() {
  const [start, setStart] = useState('');
  const [startCoords, setStartCoords] = useState<Coords | null>(null);
  const [results, setResults] = useState<any[]>([]);
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
    <div className="p-4 max-w-3xl mx-auto">
      <div className="bg-[#fff] rounded-3xl shadow-xl p-6">
        <InputSection
          type="start"
          input={start}
          setInput={setStart}
          setLatLng={setStartCoords}
        />

        <button
          onClick={handleSearchNearby}
          className="mt-4 px-6 py-3 bg-[#7b3f2c] hover:bg-[#9e533c] text-white rounded-xl text-lg font-semibold shadow-md transition duration-300 w-full"
        >
          Search Ride
        </button>
      </div>

      {loading ? (
        <p className="text-[#7b3f2c] text-center mt-6 animate-pulse font-medium">
          Searching nearby rides...
        </p>
      ) : results.length > 0 ? (
        <div className="mt-8 space-y-6 animate-fade-in-up">
          {results.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6 italic">
          No nearby rides found.
        </p>
      )}
    </div>
  );
}
