import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface PatchRequestBody {
    title?: string;
    description?: string;
    image?: string;
    locationDescription?: string;
    // Add other fields as necessary
}

export async function PATCH(req: Request, { params }: { params: { homestayId: string } }): Promise<NextResponse> {
    try {
        const body: PatchRequestBody = await req.json(); // Parse the incoming JSON request
        const { userId } = getAuth(req); // Get userId from the request

        // Check for required parameters
        if (!params.homestayId) {
            return new NextResponse('Homestay Id is required', { status: 400 });
        }

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Convert homestayId to an integer
        const homestayId = parseInt(params.homestayId, 10);
        if (isNaN(homestayId)) {
            return new NextResponse('Invalid Homestay Id', { status: 400 });
        }

        const homestay = await prismadb.homestay.update({
            where: {
                id: homestayId,
            },
            data: { ...body },
        });

        return NextResponse.json(homestay); // Return the updated homestay data

    } catch (error) {
        console.error("Error at /api/homestay/[homestayId] PATCH", error); // Log the error details
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { homestayId: string } }): Promise<NextResponse> {
    try {
        const { userId } = getAuth(req); // Get userId from the request

        // Check for required parameters
        if (!params.homestayId) {
            return new NextResponse('Homestay Id is required', { status: 400 });
        }

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Convert homestayId to an integer
        const homestayId = parseInt(params.homestayId, 10);
        if (isNaN(homestayId)) {
            return new NextResponse('Invalid Homestay Id', { status: 400 });
        }

        const homestay = await prismadb.homestay.delete({
            where: {
                id: homestayId,
            }
        });

        return NextResponse.json(homestay); // Return the deleted homestay data

    } catch (error) {
        console.error("Error at /api/homestay/[homestayId] DELETE", error); // Log the error details
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}