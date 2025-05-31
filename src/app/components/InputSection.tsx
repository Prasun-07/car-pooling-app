'use client'

import { useEffect, useState } from "react";

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
    
    useEffect(() => {
    if (!input) return;

    const fetchPredictions = async () => {
      try {
        const res = await fetch(`/api/autocomplete?input=${encodeURIComponent(input)}`);
        const data = await res.json();
        setPredictions(data);
      } catch (err) {
        console.error("Autocomplete fetch failed:", err);
      }
    };

    const debounce = setTimeout(fetchPredictions, 300);
    return () => clearTimeout(debounce);
    }, [input]);

    return (
        <div className="bg-amber-50 p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
            <input
                type='text'
                placeholder={ type == "start" ? "Starting Location" : "Destination Location"}
                className="bg-transparent w-full outline-none text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <ul className="bg-amber-50 text-black p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
                {predictions.map((prediction) => (
                    <li key={prediction.place_id} className="p-2 text-black hover:bg-gray-100 cursor-pointer">
                        {prediction.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}