'use client';

import { useEffect, useRef, useState } from "react";

type InputSectionProps = {
  type: string;
  input: string;
  setInput: (val: string) => void;
  setLatLng?: (val: { lat: number; lng: number }) => void;
};

type Prediction = {
  place_id: string;
  description: string;
};

export default function InputSection({ type, input, setInput, setLatLng }: InputSectionProps){
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  console.log(coordinates);
  useEffect(() => {
    if (!input.trim()) {
      setPredictions([]);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/autocomplete?input=${encodeURIComponent(input)}`);
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        setPredictions(data);
      } catch (err) {
        console.error('Autocomplete fetch failed:', err);
        setPredictions([]);
      }
    }, 300);
  }, [input]);

  const handleSelect = async (description: string, place_id: string) => {
    setInput(description);
    setPredictions([]);

    try {
      const res = await fetch(`/api/coordinates?place_id=${place_id}`);
      if (!res.ok) throw new Error('Coordinates fetch failed');
      const data = await res.json();
      setCoordinates(data);
      if (setLatLng) setLatLng(data);
      console.log("Selected Coordinates:", data);
    } catch (err) {
      console.error("Failed to fetch coordinates:", err);
    }
  };

  return (
    <div className="relative w-full mt-4">
      <label className="block text-sm font-medium text-[#3e3e3e] mb-2">
        {type === "start" ? "Starting Location" : "Destination Location"}
      </label>
      <input
        type="text"
        placeholder={type === "start" ? "e.g. Bagdogra Airport" : "e.g. City Center Mall"}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-[#7b3f2c] shadow-sm transition-all duration-200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
      />
      {isFocused && predictions.length > 0 && (
        <ul className="absolute z-50 top-full mt-2 left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {predictions.map((prediction) => (
            <li
              key={prediction.place_id}
              className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#f9e3d8] transition-colors rounded-md"
              onMouseDown={() => handleSelect(prediction.description, prediction.place_id)}
            >
              {prediction.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
