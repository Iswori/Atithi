import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the incoming JSON request
    const { userId } = getAuth(req); // Get userId from the request

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Validate required fields
    const requiredFields = ["title", "description", "image", "locationDescription"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return new NextResponse(`Missing field: ${field}`, { status: 400 });
      }
    }

    // Create a new homestay entry in the database
    const homestay = await prismadb.homestay.create({
      data: {
        ...body,
        userId, // Attach userId to the homestay
      },
    });

    return NextResponse.json(homestay); // Return the created homestay
  } catch (error) {
    console.error("Error at /api/homestay POST:", error); // Log the error details
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}