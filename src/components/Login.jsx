import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

   const navigate = useNavigate()

   const { user, signInWithGoogle } = useContext(AuthContext)
   const handleGoogleLogin = () => {
      console.log('clicked');
      signInWithGoogle()
      
   }
   if(user){
      return navigate('/')
       
   }




   return (
      <div className='flex justify-center mt-[10%]'>
         <div className="space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
               <h3 className="text-3xl font-bold tracking-tight text-green-500">Login Your Account</h3>
            </div>
            <div>
               <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                  </div>
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                        Email
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                     />
                  </div>
                  <div className="space-y-2 text-sm">
                     <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                        Password
                     </label>
                     <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                        id="password_"
                        placeholder="password"
                        name="password"
                        type="password"
                     />
                  </div>
                  <button className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 dark:bg-sky-700">Submit</button>

               </form>
               <div className="mt-6 text-3xl flex items-center justify-center space-x-5">
                  <FcGoogle onClick={handleGoogleLogin} className="border cursor-pointer"/>
                  <FaGithub />
               </div>
               <p className="text-center text-gray-700 mt-5">New here ? <Link to='/register' className="font-semibold hover:text-green-500">Register</Link></p>
            </div>
         </div>
      </div>
   );
};

export default Login;