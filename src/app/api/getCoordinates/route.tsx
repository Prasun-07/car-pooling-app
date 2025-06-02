import { NextRequest, NextResponse } from "next/server";
import { getCoordinates } from "../../../../lib/GoogleMaps";

export async function POST(req: NextRequest) {
  try {
    const { placeId } = await req.json();
    if (!placeId) return NextResponse.json(null, { status: 400 });

    const location = await getCoordinates(placeId);
    if (!location) return NextResponse.json(null, { status: 404 });

    return NextResponse.json({ lat: location.lat, lng: location.lng });
  } catch (error) {
    console.error("Get coordinates error:", error);
    return NextResponse.json(null, { status: 500 });
  }
}
