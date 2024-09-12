import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Nav = () => {
   const {user, logOut} = useContext(AuthContext)
   const handleLogOut = () =>{
      logOut()
      console.log('clicked logout');
   }
   return (
      <div className='navbar bg-base-100 max-w-7xl mx-auto'>
         <div className='flex-1'>
            <div className='flex gap-2 items-center'>
               <img className='w-auto h-7' src='' alt='' />
               <span className='font-bold text-xl text-green-500'>Helping</span>
            </div>
         </div>
         <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
               <li>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/donate'>Donate</Link>
               </li>
               <li>
                  <Link to='/beVolunteer'>Be Volunteer</Link>
               </li>
               {!user && <li>
                  <Link to='/register'>Register</Link>
               </li>}
            </ul>

            { user && <div className='dropdown dropdown-end z-50'>
               <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
               >
                  <div className='w-10 rounded-full' title=''>
                     <img src={user?.photoURL} alt="nothing" title={user?.displayName} />
                  </div>
               </div>
               <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
               >
                  <li>
                     <Link to='/addVolunteer'>Add Volunteer</Link>
                  </li>
                  
                  <li>
                     <Link to='/myPost'>Manage My Post</Link>
                  </li>
                  
                  <li className='mt-2'>
                     <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                  </li>
               </ul>
            </div>}
         </div>
      </div>
   );
};

export default Nav;