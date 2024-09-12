import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddVolunteer = () => {
   const {user} = useContext(AuthContext)
   const navigate = useNavigate()


   const handleAdd = e =>{
      e.preventDefault();
      const form = e.target;
      const thumbnail = form.thumbnail.value;
      const post_title = form.post_title.value;
      const category = form.category.value;
      const location = form.location.value;
      const volunteers_number = form.volunteers_number.value;
      const deadline = form.deadline.value;
      const description = form.description.value;

      const author = {
         name : user.displayName,
         email : user.email,
         author_photo : user.photoURL
      }
      const volunteer = {thumbnail, post_title, category, location,description, volunteers_number, deadline, author}
      // console.log(volunteer)

      fetch('https://server-wheat-zeta.vercel.app/volunteer', {
         method:'POST', 
         headers:{
            'content-type'  : 'application/json'
         },
         body: JSON.stringify(volunteer)
         
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if(data.insertedId){
            toast.success('Volunteer added Successfully.')
            form.reset()
            navigate('/')


         }
      })


   }
   return (
      <div>
         <h1 className="text-center py-[3%] text-3xl sm:text-4xl font-semibold">Add Volunteer</h1>
         <form onSubmit={handleAdd} className="*:w-full max-w-xl p-6 border mx-auto space-y-5 *:border *:p-1.5">
            <input type="text" name="thumbnail" placeholder="Thumbnail URL" required/>
            <input type="text" name="post_title" placeholder="Post title" required/>
            <select name="category" id="" required>
               <option value="healthcare">Healthcare</option>
               <option value="education">Education</option>
               <option value="social_service">Social Service</option>
               <option value="animal_welfare">Animal Welfare</option>
            </select>
            <input type="text" name="location" placeholder="Location" required/>
            <input type="text" name="volunteers_number" placeholder="Volunteers Number" required/>
            <input type="date" name="deadline"  required/>
            <textarea name="description" id="" placeholder="Write Description" required></textarea>
            <input type="submit" value="Add Volunteer" className="font-semibold text-white bg-green-500 active:scale-95 duration-300"/>
         </form>         
      </div>
   );
};

export default AddVolunteer;