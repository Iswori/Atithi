import prismadb from "@/lib/prismadb";
import { Homestay } from "@prisma/client";

export const getHomestayById = async (homestayId: string): Promise<Homestay | null> => {
    try {
        const id = parseInt(homestayId); // Convert to Int if necessary

        const homestay = await prismadb.homestay.findUnique({
            where: {
                id: id,
            },
            include: {
                rooms: true,
            },
        });
        

        return homestay || null; // Return null if homestay is not found
    } catch (error) {
        console.log("Fetching homestay with ID:", homestayId); // Log the error
        // throw new Error(`Failed to retrieve homestay`);
    }
};