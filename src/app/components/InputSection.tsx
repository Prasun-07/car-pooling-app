'use client'
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { useEffect, useState } from "react";
import { autocomplete } from "../../../lib/googleMaps";

type InputSectionProps = {                                          //defines to typescript that type is a valid prop
        type : string;
};

type Suggestion = {
  description: string;
  place_id: string;
};

export default function InputSection({ type }: InputSectionProps){
    const [suggestions, setSuggestions] = useState<PlaceAutocompleteResult[]>([]);
    const [input, setInput] = useState("");
     const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            const suggestions = await autocomplete(input);
            setSuggestions(suggestions ?? []);
        };
        fetchSuggestions();
    }, [input]);

    const handleSuggestionClick = (suggestion: Suggestion) => {
    setInput(suggestion.description);
    setSuggestions([]);
    setShowSuggestions(false);
    };

    return (
        <div className="bg-amber-50 p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
            <input type='text' 
                   placeholder={type == "start" ? "Starting Location" : "Destination Location"} 
                   className="bg-transparent w-full outline-none text-black" 
                   onChange={(e) => setInput(e.target.value)} 
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full max-h-60 overflow-y-auto">
                {suggestions.map((s) => (
                    <li
                    key={s.place_id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(s)}
                    >
                    {s.description}
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}