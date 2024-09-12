import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
      return <div className="w-full h-screen flex items-center justify-center sm:-mt-20">
         <span className="loading loading-spinner text-info"></span>
      </div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;