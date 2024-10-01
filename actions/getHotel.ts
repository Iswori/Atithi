import prismadb from "@/lib/prismadb";

export const getHomestay = async (searchParams: { title: string }) => {
    try {
        const { title } = searchParams; // Destructure title from searchParams

        const homestays = await prismadb.homestay.findMany({
            where: {
                title: {
                    contains: title, // Use the title directly
                    mode: 'insensitive', // Optional: make the search case insensitive
                },
            },
            include: { rooms: true },
        });

        return homestays; // Return the homestays
    } catch (error) {
        console.error("Error fetching homestays:", error); // Use console.error for better logging
        throw new Error("Failed to fetch homestays"); // Throw an error to propagate it
    }
};