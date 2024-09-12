import Swal from 'sweetalert2'
const MyPostCard = ({volunteers}) => {
   const {_id, thumbnail, post_title, category } = volunteers;

   const handleDelete = (_id) =>{

      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
       }).then((result) => {
         if (result.isConfirmed) {

            fetch(`https://server-wheat-zeta.vercel.app/volunteer/${_id}`, {
               method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            })
         }
       });


      
   }
   return (
         <tr className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
                  <th className="px-6 py-4 text-start">
                     <img className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover" src={thumbnail} />
                  </th>
                  <th className="px-6 py-4 text-start ">{post_title}</th>
                  <th className="px-6 py-4 text-start">
                     <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                        {category}
                     </button>
                  </th>
                  <th className="px-6 py-4 text-start">
                     <button onClick={() => handleDelete(_id)} className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                        Delete
                     </button>
                  </th>
               </tr>         
   );
};

export default MyPostCard;