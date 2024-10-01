"use client";

// import { getHomestay } from "@/actions/getHotel";
// import HomestayList from "@/components/homestay/HomestayList";

// interface HomeProps{
//   searchParams: {
//     title: string
//   }
// }


// export default async function Home({searchParams}: HomeProps){
//   const homestay = await getHomestay(searchParams)

//   if (!homestay) return <div> no homestay found</div>
//   return(
//     <div>
// <HomestayList homestay={homestay}/>
//     </div>
//   )
// }
















































import React from "react";
import { useRouter } from 'next/navigation';



const Home = () => {


  const router = useRouter();
 

  const style = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/home3.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "80vh", // Adjust height as needed
    width: "auto", // Full viewport width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
  };

  const kaski = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/kaski.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "30vh", // Adjust height as needed
    width: "20vw", // Full viewport width
    borderRadius: "15px",
    border: "solid",
  };

  const chitwan = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/chitwan1.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "30vh", // Adjust height as needed
    width: "20vw", // Full viewport width
    borderRadius: "15px",
    border: "solid",
  };

  const lamjung = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/lamjung1.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "30vh", // Adjust height as needed
    width: "20vw", // Full viewport width
    borderRadius: "15px",
    border: "solid",
  };

  const solukhumbu = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/solukhumbu.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "30vh", // Adjust height as needed
    width: "20vw", // Full viewport width
    borderRadius: "15px",
    border: "solid",
  };

  const jan = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/jan.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const feb = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/feb.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const march = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/march.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const april = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/april.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const may = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/may.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const june = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/june.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const july = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/july.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const aug = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/aug.jpg")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const sep = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/sep.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const oct = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/oct.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const nov = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/nov.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };

  const dec = {
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/dec.png")',
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    width: "60px", // Full viewport width
    borderRadius: "60px",
    border: " 1px solid",
  };




  return (
    <div>
      <div style={style}>
        <h1 className=" text-6xl text-yellow-200 ">Relax Your Mind</h1>
        <h2 className=" text-4xl text-yellow-200">
          Explore An Authentic Local Experience
        </h2>
      </div>

      <div className="flex flex-row gap-6 p-10">
        <div className=" flex flex-col border-2 w-full h- border-gray-700 items-center self-center py-3 gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className=" text-3xl">Live Amidst Nature</h1>

          <h3 className=" flex text-center text-xl">
            Feel and experience nature in its fullest glory to refresh yourself.
          </h3>
        </div>
        <div className="flex flex-col border-2 w-full h- border-gray-700 items-center self-center py-3 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 ">
          <h1 className="text-3xl">Welcome to NEPAL</h1>

          <h3 className=" flex text-center text-xl">
            Experience the charm of NEPAL
          </h3>
        </div>
        <div className=" flex flex-col border-2 w-full h- border-gray-700 items-center self-center py-3 gap-2 bg-gradient-to-r from-indigo-500">
          <h1 className="text-3xl">Family Friendly</h1>

          <h3 className=" flex text-center text-xl">
            The calm and comfortable environment will make your family feel at
            home.
          </h3>
        </div>
      </div>

      <div className="flex flex-col py-10  items-center gap-8 border-t border-gray-600 w-auto">
        <h1 className="text-4xl">HOMESTAY IN NEPAL</h1>
        <div className="flex flex-row  py-10  items-center gap-14">
          <div className="flex gap-4 flex-col text-center ">
          
          <div 
              style={kaski} 
              className="cursor-pointer" 
              onClick={() => router.push('/homestay/new')} // Handle keyboard navigation
            />
            <h1 className="text-2xl">KASKI</h1>
          </div>


          <div className="flex gap-4 flex-col text-center ">
            <div style={chitwan}></div>
            <h1 className="text-2xl">CHITWAN</h1>
          </div>

          <div className="flex gap-4 flex-col text-center ">
            <div style={lamjung}></div>
            <h1 className="text-2xl"> LAMJUNG</h1>
          </div>

          <div className="flex gap-4 flex-col text-center ">
            <div style={solukhumbu}></div>
            <h1 className="text-2xl">SOLUKHUMBU</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-10  items-center gap-8 border-t border-gray-600 w-auto">
        <h1 className="text-2xl">Best Place To Visit NEPAL By Month</h1>
        <div className="flex flex-row py-10 gap-14 items-center">
          <div className="flex gap-1 flex-col text-center ">
            <div style={jan}></div>
            <h1 className="text-l">JAN</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={feb}></div>
            <h1 className="text-l">FEB</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={march}></div>
            <h1 className="text-l">MARCH</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={april}></div>
            <h1 className="text-l">APRIL</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={may}></div>
            <h1 className="text-l">MAY</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={june}></div>
            <h1 className="text-l">JUNE</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={july}></div>
            <h1 className="text-l">JULY</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={aug}></div>
            <h1 className="text-l">AUG</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={sep}></div>
            <h1 className="text-l">SEP</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={oct}></div>
            <h1 className="text-l">OCT</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={nov}></div>
            <h1 className="text-l">NOV</h1>
          </div>

          <div className="flex gap-1 flex-col text-center ">
            <div style={dec}></div>
            <h1 className="text-l">DEC</h1>
          </div>
        </div>
      </div>

      <div className=" pt-20 pb-20 border-t border-gray-600 w-auto">

        <div className="flex flex-row justify-center space-x-96">
          <div>
            <h1 className="text-xl">COMPANY</h1>
            <h2 className="mt-4 text-lg">About us</h2>
            <h3 className="text-lg">Become an affiliate</h3>
            <h4 className="text-lg">Work with us</h4>
            <h5 className="text-lg">Contact us</h5>
          </div>
          <div>
            <h1 className="text-xl">EXPLORE</h1>
            <h2 className="mt-4 text-lg">Blog</h2>
            <h3 className="text-lg">Inspire me</h3>
            <h4 className="text-lg">Invite friends</h4>
          </div>
          <div>
            <h1 className="text-xl">USER SERVICE</h1>
            <h2 className="text-lg mt-4">Need help?</h2>
          </div>
          </div>




        <div></div>
        <div></div>

        </div>



    </div>
  );
};

export default Home;



