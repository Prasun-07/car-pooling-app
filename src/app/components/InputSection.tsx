'use client'

import { useEffect, useRef, useState } from "react";

type InputSectionProps = {
    type: string;
};

type Prediction = {
  place_id: string;
  description: string;
};

export default function InputSection({type} : InputSectionProps) {
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [input, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

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
            console.log("Selected Coordinates:", data);
        } catch (err) {
            console.error("Failed to fetch coordinates:", err);
        }
    };

    return (
        <div className="relative w-full bg-amber-50 p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
            <input
                type="text"
                placeholder={type === "start" ? "Starting Location" : "Destination Location"}
                className="bg-transparent w-full outline-none text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            />
            {isFocused && predictions.length > 0 && (
                <ul className="absolute z-50 top-full mt-1 left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-md max-h-60 overflow-y-auto text-black">
                    {predictions.map((prediction) => (
                        <li
                            key={prediction.place_id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
