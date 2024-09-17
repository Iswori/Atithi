'use client'

import { Homestay, Room } from "@prisma/client";

interface AddHomestayformProps{
     homestay: HomestayWithRooms | null
}

export type HomestayWithRooms = Homestay & {
    rooms:Room[]
}

const AddHomestayform = ({}:AddHomestayformProps) => {
    return ( 
        <div>

        </div>
     );
}
 
export default AddHomestayform;