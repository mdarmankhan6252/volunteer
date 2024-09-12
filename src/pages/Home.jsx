import About from "../components/About";
import About_number from "../components/About_number";
import Banner from "../components/Banner";
import Volunteer from "../components/Volunteer";

const Home = () => {
   return (
      <div>
         <Banner/>
         <About/>
         <About_number/> 
         <Volunteer/>

      </div>
   );
};

export default Home;