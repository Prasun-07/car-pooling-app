import { NextRequest, NextResponse } from "next/server";
import { autocomplete } from "../../../../lib/GoogleMaps";

export async function GET(req: NextRequest) {
  const input = req.nextUrl.searchParams.get("input") || "";
  if (!input) return NextResponse.json([]);

  try {
    const predictions = await autocomplete(input);
    return NextResponse.json(predictions ?? []);
  } catch (error) {
    console.error("Autocomplete error:", error);
    return NextResponse.json({ error: "Failed to fetch predictions" }, { status: 500 });
  }
}
