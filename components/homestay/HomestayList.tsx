import { HomestayWithRooms } from "./addHomestayform";
import HomestayCard from "./HomestayCard";

const HomestayList = ({homestay}: {homestay: HomestayWithRooms[]}) => {
    return ( 
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-4">
             {
                homestay.map((homestay)=> <div key={homestay.id}>
                    <HomestayCard homestay= {homestay} />
                     </div>)
             }
        </div>
     );
}
 
export default HomestayList;