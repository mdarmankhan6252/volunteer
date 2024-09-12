import about_1 from '../assets/about/about_1.jpg'
import about_2 from '../assets/about/about_2.jpg'
import about_3 from '../assets/about/about_3.jpg'

const About = () => {
   return (
      <div className='max-w-7xl mx-auto px-3'>
         <div className="text-center py-16 space-y-4">
            <h1 className="text-4xl font-semibold font-serif">Who We Are</h1>
            <p className="font-light">Organization set up to provide help and raise money for those in need</p>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            <div className='border-2 border-dotted p-3 rounded-xl hover:shadow-[0px_0px_7px_0px] hover:shadow-gray-300 duration-500'>
               <img src={about_1} alt="" className='rounded-xl'/>
               <h2 className='text-2xl py-3'>Places To Get Lost</h2>
               <p className='font-light'>Home Adviser Lt Gen (retd) Jahangir Alam Chowdhury today said the government has ensured cent percent security for all foreign nationals living in Bangladesh</p>
            </div>
            <div className='border-2 border-dotted p-3 rounded-xl hover:shadow-[0px_0px_7px_0px] hover:shadow-gray-300 duration-500'>
               <img src={about_2} alt="" className='rounded-xl'/>
               <h2 className='text-2xl py-3'>Places To Get Lost</h2>
               <p className='font-light'>Home Adviser Lt Gen (retd) Jahangir Alam Chowdhury today said the government has ensured cent percent security for all foreign nationals living in Bangladesh</p>
            </div>
            <div className='border-2 border-dotted p-3 rounded-xl hover:shadow-[0px_0px_7px_0px] hover:shadow-gray-300 duration-500'>
               <img src={about_3} alt="" className='rounded-xl'/>
               <h2 className='text-2xl py-3'>Places To Get Lost</h2>
               <p className='font-light'>Home Adviser Lt Gen (retd) Jahangir Alam Chowdhury today said the government has ensured cent percent security for all foreign nationals living in Bangladesh</p>
            </div>
         </div>
      </div>
   );
};

export default About;