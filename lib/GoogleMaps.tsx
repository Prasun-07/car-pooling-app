"use server"
import { Client } from "@googlemaps/google-maps-services-js"

const client = new Client();

export const autocomplete = async (input : string) => {
    if(!input) return [];

    try {
        const response = await client.placeAutocomplete({
            params : {
                input,
                key: process.env.GOOGLE_API_KEY!,
            },
        });
        return response.data.predictions;
    } catch (e) {
        console.error("Google Maps API error:", e);
        return [];
    }
}

export const getPlaceCoordinates = async (placeId : string) => {
    if (!placeId) return null;

    try {
        const response = await client.placeDetails({
            params : {
                place_id: placeId,
                key: process.env.GOOGLE_API_KEY!, 
            },
        });
        const location = response.data.result.geometry?.location;
        return location ?? null;
    } catch (error) {
        console.error("Google Maps PlaceDetails error: ", error);
        return null;
    }
}
