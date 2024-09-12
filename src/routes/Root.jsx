import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <Nav />
         <Outlet />
         <div className="pt-10">
            <Footer />
         </div>
      </div>
   );
};

export default Root;