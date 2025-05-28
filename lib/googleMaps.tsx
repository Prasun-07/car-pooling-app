"use server"
const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
export const autocomplete = async (input : string) => {
     if (!input) return [];

    const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
    )}&types=(cities)&key=${GOOGLE_MAP_API_KEY}&components=country:in`;

    const res = await fetch(endpoint);
    const data = await res.json();

    if (data.status === "OK") {
        return data.predictions;
    } else {
        console.error("Autocomplete API error:", data.status, data.error_message);
        return [];
    }
}