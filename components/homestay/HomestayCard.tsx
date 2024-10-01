'use client'

import { usePathname, useRouter } from "next/navigation";
import { HomestayWithRooms } from "./addHomestayform";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { Button } from "../ui/button";





const HomestayCard = ({homestay} : {homestay: HomestayWithRooms}) => {


    const pathname = usePathname()
    const isMyHomestay = pathname.includes('my-homestay')
    const router = useRouter()


    return ( 
        <div onClick={()=> !isMyHomestay && router.push(`/homestay-details/${homestay.id}`)} className={
            cn ('col-span-1 cursor-pointer transition hover:scale-105',isMyHomestay && 'cursor-default')
        }>
             <div className="flex gap-2 bg-background/50 border border-primary/10 rounded-lg">
                <div className="flex-1 aspect-square overflow-hidden relative w-full h-[210px] rounded-s-lg">
                    <Image 
                    fill
                    src={homestay.image}
alt={homestay.title}
className="w-full h-full object-cover"/>
                    </div>
                <div className="flex-1 flex flex-col justify-between h-[210px] gap-1 p-1 py-2 text-sm">
                    <h3 className="font-semibold text-xl"> {homestay.title}</h3>
                    <div className="text-primary/90 ">{homestay.description.substring(0,45)}...</div>
                   
                   {/* <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                    {homestay?.rooms[0].roomPrice && <>
                     <div className="font-semibold">${homestay?.rooms[0]?.roomPrice}</div>
                     <div className="text-xs">/ 24hrs </div>
                    </>}
                    </div>
                    {isMyHomestay && <Button onClick={()=> router.push(`/homestay${homestay.id}`)} variant='outline'> Edit </Button>}
                   </div> */}

                </div>
             </div>
        </div>
     );
}
 
export default HomestayCard;