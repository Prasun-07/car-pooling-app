// Updated InputSection.tsx with proper loading check
'use client'

import { useEffect, useRef } from "react";

type InputSectionProps = {
    type: string;
    onPlaceSelected?: (place: any) => void;
};

export default function InputSection({ type, onPlaceSelected }: InputSectionProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<any>(null);

    useEffect(() => {
        const initAutocomplete = async () => {
            // Wait for Google Maps to be fully loaded
            if (!window.google || !window.google.maps || !inputRef.current) {
                return;
            }

            try {
                // For the newer API with importLibrary
                if (google.maps.importLibrary) {
                    const { Autocomplete } = await google.maps.importLibrary("places") as any;
                    
                    autocompleteRef.current = new Autocomplete(
                        inputRef.current,
                        {
                            fields: ["formatted_address", "geometry", "name", "place_id"],
                            types: ["geocode", "establishment"]
                        }
                    );
                } else {
                    // Fallback to the traditional method
                    autocompleteRef.current = new google.maps.places.Autocomplete(
                        inputRef.current,
                        {
                            fields: ["formatted_address", "geometry", "name", "place_id"],
                            types: ["geocode", "establishment"]
                        }
                    );
                }

                autocompleteRef.current.addListener("place_changed", () => {
                    const place = autocompleteRef.current.getPlace();
                    if (place && onPlaceSelected) {
                        onPlaceSelected(place);
                    }
                });
            } catch (error) {
                console.error("Error initializing autocomplete:", error);
            }
        };

        // Add a small delay to ensure Google Maps is fully loaded
        const timer = setTimeout(initAutocomplete, 100);

        return () => {
            clearTimeout(timer);
            if (autocompleteRef.current && google.maps.event) {
                google.maps.event.clearInstanceListeners(autocompleteRef.current);
            }
        };
    }, [onPlaceSelected]);

    return (
        <div className="bg-amber-50 p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
            <input
                ref={inputRef}
                type='text'
                placeholder={type === "start" ? "Starting Location" : "Destination Location"}
                className="bg-transparent w-full outline-none text-black"
            />
        </div>
    )
}