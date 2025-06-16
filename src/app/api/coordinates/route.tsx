
import { NextRequest, NextResponse } from "next/server";
import { getPlaceCoordinates } from "../../../../lib/GoogleMaps";

export async function GET(req: NextRequest) {
  const placeId = req.nextUrl.searchParams.get("place_id") || "";

  if (!placeId) {
    return NextResponse.json({ error: "Missing place_id" }, { status: 400 });
  }

  try {
    const coordinates = await getPlaceCoordinates(placeId);
    return NextResponse.json(coordinates);
  } catch (error) {
    console.error("Coordinates fetch error:", error);
    return NextResponse.json({ error: "Coordinates fetch failed" }, { status: 500 });
  }
}
