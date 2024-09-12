import { useEffect, useState } from "react";
import MyPostCard from "./MyPostCard";

const MyPost = () => {
   const [volunteers, setVolunteers] = useState([])

   useEffect(() =>{
      fetch('http://localhost:5000/volunteer')
      .then(res => res.json())
      .then(data =>{
         setVolunteers(data)
      })
   },[])

   
   return (

      <div className="overflow-x-auto max-w-7xl mx-auto px-3">
         <table className="min-w-full border border-gray-200 bg-white shadow-lg">
            {/* Table Header */}
            <thead>
               <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                  
                  <th className="px-6 py-4 text-start">Thumbnail</th>
                  <th className="px-6 py-4 text-start">Title</th>
                  <th className="px-6 py-4 text-start">Email</th>
                  <th className="px-6 py-4 text-start">Delete</th>
               </tr>
            </thead>
            <tbody >
               
            {
               volunteers.map((volunteers, i) =><MyPostCard key={i} volunteers={volunteers}></MyPostCard>)
            }
               
            </tbody>
         </table>
      </div>

   );
};

export default MyPost;