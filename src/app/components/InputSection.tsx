'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocationContext } from '../context/LocationContext';

export type InputSectionProps = { type: 'start' | 'end' };
export type Prediction = { place_id: string; description: string };

export default function InputSection({ type }: InputSectionProps) {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const { updateCoordinates } = useLocationContext();

  useEffect(() => {
    if (!input.trim()) return setPredictions([]);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/autocomplete?input=${encodeURIComponent(input)}`);
        const data = await res.json();
        setPredictions(data);
      } catch (error) {
        console.error('Autocomplete error:', error);
      }
    }, 300);
  }, [input]);

  const handleSelect = async (prediction: Prediction) => {
    setInput(prediction.description);
    setPredictions([]);
    try {
      const res = await fetch('/api/getCoordinates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ placeId: prediction.place_id }),
      });
      const data = await res.json();
      updateCoordinates(type, data);
    } catch (error) {
      console.error('Get coordinates error:', error);
    }
  };

  return (
    <div className="relative text-black bg-white p-4 rounded shadow w-full mb-2">
      <input
        className="w-full border p-2"
        placeholder={type === 'start' ? 'Start location' : 'Destination'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
      />
      {isFocused && predictions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border max-h-60 overflow-y-auto">
          {predictions.map((p) => (
            <li key={p.place_id} className="p-2 hover:bg-gray-100" onMouseDown={() => handleSelect(p)}>
              {p.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
