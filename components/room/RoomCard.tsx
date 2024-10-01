'use client'

import { Booking, Homestay, Room } from "@prisma/client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import AmenityItem from "../ui/AmenityItem";
import { Bed, Loader2, Plus, Trash} from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import AddRoomForm from "./AddRoomForm";
import { DatePickerWithRange } from "./DateRangePicker";
  


interface RoomCardProps {
    homestay?: Homestay & {
        rooms: Room[]
    };
    room: Room;
    bookings?: Booking[];
}
const RoomCard = ({ homestay, room, bookings = []}: RoomCardProps) => {
const [isLoading, setIsLoading] = useState()
const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const isHomestayDetailsPage= pathname.includes('homestay-details')

    // function handleDialogueOpen(): void {
    //     throw new Error("Function not implemented.");
    // }

    return ( 
        <Card>
        <CardHeader>
          <CardTitle>{room.title}</CardTitle>
          <CardDescription>{room.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
         <div className="aspect-square overflow-hidden relative h-[200px] rounded-lg">
         < Image
        src={room.image || '/path/to/fallback/image.jpg'} // Fallback image if room.image is not available
        alt={room.title}
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
        className="object-cover"
        layout="responsive" // Optional, if you want to maintain aspect ratio
      />        </div>



      <div className="grid grid-cols-2 gap-4 content-start text-sm">
       <AmenityItem children={undefined}>
        <Bed className="h-4 w-4"/> {room.bedCount} Bed{'(s)'}
       </AmenityItem>
      </div>

      <Separator/>
      <div className="flex gap-4 justify-between">
        <div>
            Room Price: <span>${room.roomPrice}</span>
            <span>/24hrs</span>
        </div>
        {!!room.breakFastPrice && <div>breakFastPrice: <span>${room.breakFastPrice}</span> </div>}
      </div>

      <Separator/>

<CardFooter>
{
  isHomestayDetailsPage ? <div className="flex flex-col gap-6">
    <div>
      <div></div>
      <DatePickerWithRange/>
    </div>
  </div>
   : 
    <div className="flex w-full justify-between">
      <Button disabled={isLoading} type="button" variant="ghost">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4" />
            Deleting
          </>
        ) : (
          <>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </>
        )}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                      <Button
                        type="button"
                        variant="outline"
                        className="max-w-[150px]"
                      >
                        <Plus className="mr-2 h-4 w-4" /> Update Room
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[900px] w-[90%]">
                      <DialogHeader className="px-2">
                        <DialogTitle>update a room </DialogTitle>
                        <DialogDescription>
                          add details about a room in your hotel.
                        </DialogDescription>
                      </DialogHeader>
                      <AddRoomForm homestay={homestay} room={room} handleDialogueOpen={handleDialogueOpen} />
                    </DialogContent>
                  </Dialog>
    </div>
  
}
</CardFooter>

        </CardContent>
      </Card>
      
     );
}
 
export default RoomCard;