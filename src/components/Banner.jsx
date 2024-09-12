
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner_1 from '../assets/banner/banner_1.jpg'
import banner_2 from '../assets/banner/banner_2.jpg'
import banner_3 from '../assets/banner/banner_3.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
   return (
      <div className='max-w-7xl mx-auto px-3'>
         <Swiper
            spaceBetween={60}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <div className=''>
               <SwiperSlide className='relative'>
                  <img src={banner_1} alt="" className='w-full rounded-xl h-[40vh] md:h-[70vh] ' />
                  <div className='bg-gradient-to-r from-[#0000ff33] to-[#003e0033] absolute top-0 left-0 right-0 bottom-0 rounded-xl'></div>

                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  w-full text-center space-y-4'>
                     <h1 className='text-2xl sm:text-3xl md:text-5xl font-serif'>Want To Become A Volunteer ?</h1>
                     <p>If you want to become a volunteer just register and and click<br />the button on Be Volunteer and follow the next step</p>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={banner_2} alt="" className='w-full h-[40vh] md:h-[70vh] rounded-xl' />
                  <div className='bg-gradient-to-r from-[#003e0033] to-[#0000ff33] absolute top-0 left-0 right-0 bottom-0 rounded-xl'></div>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  w-full text-center space-y-4'>
                     <h1 className='text-2xl sm:text-3xl md:text-5xl font-serif'>Want To Become A Volunteer ?</h1>
                     <p>If you want to become a volunteer just register and and click<br />the button on Be Volunteer and follow the next step</p>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={banner_3} alt="" className='w-full h-[40vh] md:h-[70vh] rounded-xl' />
                  <div className='bg-gradient-to-r from-[#003e0033] to-[#0000ff33] absolute top-0 left-0 right-0 bottom-0 rounded-xl'></div>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  w-full text-center space-y-4'>
                     <h1 className='text-2xl sm:text-3xl md:text-5xl font-serif'>Want To Become A Volunteer ?</h1>
                     <p>If you want to become a volunteer just register and and click<br />the button on Be Volunteer and follow the next step</p>

                  </div>
               </SwiperSlide>
            </div>
         </Swiper>

      </div>
   );
};

export default Banner;