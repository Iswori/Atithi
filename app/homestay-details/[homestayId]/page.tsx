import { getHomestayById } from "@/actions/getHomestayById";
import HomestayDetailsClient from "@/components/homestay/HomestayDetailsClient";





interface HomestayDetailsProps{
    params:{
        homestayId: string
    }
}
const HomestayDetails = async ({params}: HomestayDetailsProps) => {

    const homestay = await getHomestayById(params.homestayId)
    if(!homestay) return <div>Oop! Homestay with thw given id not found.</div>
    return (  <div>
       <HomestayDetailsClient homestay={homestay}/>
    </div>);
}
 
export default HomestayDetails;