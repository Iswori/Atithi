import { getHomestayById } from "@/actions/getHomestayById";
import AddHomestayform from "@/components/homestay/addHomestayform";
import { auth } from "@clerk/nextjs/server";


interface HomestayPageProps{
    params:{
       homestayId: string 
    }
}



const Homestay = async ({params}:HomestayPageProps) => {
    const homestay = await getHomestayById(params.homestayId)
    const {userId}=auth()

    if(!userId) return<div>Not authenticated</div>
    if(homestay && homestay.userId!== userId) return <div>Access denied</div>
    return ( 
        <div>
            <AddHomestayform homestay={null}/>
        </div>
     );
}
 
export default Homestay;