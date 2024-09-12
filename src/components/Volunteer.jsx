import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Volunteer = () => {
   const [volunteer, setVolunteer] = useState([])
   useEffect(() => {
      fetch('https://server-wheat-zeta.vercel.app/volunteer')
         .then(res => res.json())
         .then(data => setVolunteer(data))
   }, [])
   

   return (
      <div>
         <div className="text-center py-16 space-y-4">
            <h1 className="text-4xl font-semibold font-serif">Our Volunteer Posts</h1>
            <p className="font-light">Organization set up to provide help and raise money for those in need</p>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl m-auto px-3'>
            {
               volunteer.map((card, i) => <Card
                  key={i}
                  card={card}
               ></Card>)
            }
         </div>
         {
            volunteer.length >= 9 && <div className="text-center my-12">
            <Link to='/' className="bg-green-500 py-2.5 px-10 rounded-md text-white font-semibold hover:bg-transparent hover:text-green-500 duration-200 border-green-500 border-2">See Details</Link>
         </div>
         }

      </div>
   );
};

export default Volunteer;