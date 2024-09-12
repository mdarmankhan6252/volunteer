import { FcCalendar } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";

const Card = ({ card }) => {
   const { thumbnail, post_title, category, location, volunteers_number, deadline, description, author } = card;
   return (
      <div>
         <div className='border-2 p-3 rounded-xl hover:shadow-[0px_0px_7px_0px] hover:shadow-gray-300 duration-500 flex flex-col h-full'>
            <div className="flex-grow h-[250px]">
               <img src={thumbnail} alt="" className='rounded-xl w-full h-full' />
            </div>
            <div className="">
               <h5 className="text-green-600 pt-4 font-semibold">{category} </h5>
               <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                     <FcCalendar className="-mb-1 text-xl" />
                     <span>{deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <BiWorld className="-mb-1 text-xl" />
                     <span>{location}</span>
                  </div>
               </div>
               <h2 className='text-2xl py-3'>{post_title}</h2>
               <p className='font-light'>{description}</p>

               <div className="py-4 flex items-center space-x-4">
                  <img src={author.author_photo} alt="user" className="w-10 h-10 rounded-full border-2 border-green-500" />
                  <div>
                     <h3 className="font-semibold">{author.name}</h3>
                     <span className="text-[#aea9a9]">{author.email}</span>
                  </div>
               </div>
               <div className="text-right">
                  <button className="bg-green-500 py-1.5 px-4 rounded-md text-white font-semibold hover:bg-green-600 ">See Details</button>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Card;