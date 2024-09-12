import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

   const { createUser, updateUserProfile, user, setUser } = useContext(AuthContext)
   const navigate = useNavigate()




   const handleRegister = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password, name, photo);

      createUser(email, password)
      .then(result =>{
         console.log(result.user);
         updateUserProfile(name, photo)
         const newUser = {...user, photoURL : photo, displayName: name}
         setUser(newUser)
         toast.success('You have created account successfully.')
         navigate('/')
         
         
      })
      .catch(error =>{
         console.log(error);
      })
   }
   if(user){
      return navigate('/')
       
   }
   return (
      <div className='flex justify-center mt-[10%]'>
         <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
               <h3 className="text-3xl font-bold tracking-tight text-green-500">Create An Account</h3>
            </div>
            <div>
               <form onSubmit={handleRegister} className="space-y-6">
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="name">
                        Full Name
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter Your Name"
                        name="name"
                        type="text"
                        required
                     />
                  </div>
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="photo">
                        Photo URL
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter Your Photo URL"
                        name="photo"
                        type="text"
                        required
                     />
                  </div>
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                        Email
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        required
                     />
                  </div>
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                        Password
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        placeholder="password"
                        name="password"
                        type="password"
                        required
                     />
                  </div>
                  <button className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 dark:bg-sky-700">Submit</button>
               </form>
               <p className="text-center text-gray-700 mt-5">Already have an account ? <Link to='/login' className="font-semibold hover:text-green-500">Login</Link></p>
            </div>
         </div>
      </div>
   );
};

export default Register;