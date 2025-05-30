// Updated Search.tsx with better loading handling
'use client'

import { useState, useCallback } from 'react';
import InputSection from "./InputSection";
import Script from 'next/script';

export default function Search() {
    const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
    const [startLocation, setStartLocation] = useState<any>(null);
    const [endLocation, setEndLocation] = useState<any>(null);

    const handleGoogleMapsLoad = useCallback(() => {
        // Check if the places library is available
        if (window.google && window.google.maps) {
            setIsGoogleMapsLoaded(true);
        }
    }, []);

    const handleStartLocationSelected = (place: any) => {
        console.log('Start location:', place);
        setStartLocation(place);
    };

    const handleEndLocationSelected = (place: any) => {
        console.log('End location:', place);
        setEndLocation(place);
    };

    const handlePostRide = () => {
        if (!startLocation || !endLocation) {
            alert('Please select both start and end locations');
            return;
        }

        console.log('Posting ride:', {
            start: {
                address: startLocation.formatted_address,
                coordinates: {
                    lat: startLocation.geometry?.location?.lat(),
                    lng: startLocation.geometry?.location?.lng()
                }
            },
            end: {
                address: endLocation.formatted_address,
                coordinates: {
                    lat: endLocation.geometry?.location?.lat(),
                    lng: endLocation.geometry?.location?.lng()
                }
            }
        });
    };

    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
                strategy="afterInteractive"
                onLoad={handleGoogleMapsLoad}
            />
            
            <div className="">
                <h1 className="text-4xl p-5">Post A Ride</h1>
                
                {isGoogleMapsLoaded ? (
                    <>
                        <InputSection 
                            type="start" 
                            onPlaceSelected={handleStartLocationSelected}
                        />
                        <InputSection 
                            type="end"
                            onPlaceSelected={handleEndLocationSelected}
                        />
                    </>
                ) : (
                    <div className="p-5 text-gray-500">Loading maps...</div>
                )}
                
                <button 
                    className="w-full mt-5 bg-white text-black rounded-lg p-3"
                    onClick={handlePostRide}
                >
                    Post Ride
                </button>
            </div>
        </>
    );
}