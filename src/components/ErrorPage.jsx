import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
   const navigate = useNavigate()

   const handleNavigate = () =>{
      navigate('/')
   }

   return (
      <div className="flex flex-col w-full h-screen justify-center items-center">
         <h1 className="text-red-500 text-2xl font-semibold sm:text-4xl">404 page is not found</h1>

         <button onClick={handleNavigate} className="btn btn-success text-white my-3">Go to Home</button>
      </div>
   );
};

export default ErrorPage;