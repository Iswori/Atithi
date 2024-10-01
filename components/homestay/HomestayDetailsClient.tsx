'use client'

import { Booking } from "@prisma/client";
import { HomestayWithRooms } from "./addHomestayform";
import Image from "next/image";
import RoomCard from "../room/RoomCard";

const HomestayDetailsClient = ({homestay, bookings}:{homestay: HomestayWithRooms, bookings?: Booking}) => {
    return ( 
        <div className="flex flex-col gap-6 pb-2">
<div className="aspect-square overflow-hidden relative w-full h-[200px] md:h-[400px] rounded-lg">
<Image
 fill
 src={homestay.image}
 alt={homestay.title}
 className="object-cover"

/>
</div>


<div>
    <h3 className="font-semibold text-xl md:text-3xl">{homestay.title}</h3>
    <h3 className="font-semibold text-lg mt-4 mb-2">About this homestay</h3>
<p>{homestay.description}</p>
</div>



<div>

    {!!homestay.rooms.length && <div>
        
        <h3 className="text-lg font-semibold my-4">Homestay Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
             {homestay.rooms.map((room)=>{
                return < RoomCard homestay={homestay} room={room} key={room.id} bookings={bookings}/>
             })}
            
             </div>

        </div>}
</div>
        </div>
     );
}
 
export default HomestayDetailsClient;