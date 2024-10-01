import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

// Initialize the Uploadthing API
const utapi = new UTApi();

export async function POST(req: Request) {
    const { userId } = auth();

    // Check if user is authenticated
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse the request body
    const { imagekey } = await req.json();

    try {
        // Ensure imagekey is provided
        if (!imagekey) {
            return new NextResponse("Image key is required", { status: 400 });
        }

        // Attempt to delete the file
        const res = await utapi.deleteFiles(imagekey);
        
        // Return the response from Uploadthing
        return NextResponse.json(res);
    } catch (error) {
        console.error("Error at uploadthing/delete:", error);
        
        // Return an internal server error response
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}