import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface PatchRequestBody {
    title?: string;
    description?: string;
    image?: string;
    bedCount: string;
    breakFastPrice: string;
    roomPrice: string;
}

export async function PATCH(req: Request, { params }: { params: { roomId: string } }): Promise<NextResponse> {
    try {
        const body: PatchRequestBody = await req.json(); // Parse the incoming JSON request
        const { userId } = getAuth(req); // Get userId from the request

        // Check for required parameters
        if (!params.roomId) {
            return new NextResponse('Room ID is required', { status: 400 });
        }

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Convert roomId to an integer
        const roomId = parseInt(params.roomId, 10);
        if (isNaN(roomId)) {
            return new NextResponse('Invalid room ID', { status: 400 });
        }

        const room = await prismadb.room.update({
            where: {
                id: roomId,
            },
            data: { ...body },
        });

        return NextResponse.json(room); // Return the updated room data

    } catch (error) {
        console.error("Error at /api/room/[roomId] PATCH", error); // Log the error details
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { roomId: string } }): Promise<NextResponse> {
    try {
        const { userId } = getAuth(req); // Get userId from the request

        // Check for required parameters
        if (!params.roomId) {
            return new NextResponse('Room ID is required', { status: 400 });
        }

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Convert roomId to an integer
        const roomId = parseInt(params.roomId, 10);
        if (isNaN(roomId)) {
            return new NextResponse('Invalid room ID', { status: 400 });
        }

        await prismadb.room.delete({
            where: {
                id: roomId,
            }
        });

        return NextResponse.json({ message: 'Room deleted successfully' }); // Return a success message

    } catch (error) {
        console.error("Error at /api/room/[roomId] DELETE", error); // Log the error details
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}