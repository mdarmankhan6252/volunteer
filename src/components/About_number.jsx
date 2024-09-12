
const About_number = () => {
   return (
      <div className="py-20 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-3">
         <div className="text-center space-y-3 border-2 border-dashed p-6 rounded-lg relative">
            <h1 className="text-4xl font-serif">1257</h1>
            <h3 className="text-gray-600">Donations</h3>
            <div className="bg-green-300 "></div>
         </div>
         <div className="text-center space-y-3 border-2 border-dashed p-6 rounded-lg">
            <h1 className="text-4xl font-serif">730</h1>
            <h3 className="text-gray-600">Volunteers</h3>
         </div>
         <div className="text-center space-y-3 border-2 border-dashed p-6 rounded-lg">
            <h1 className="text-4xl font-serif">827</h1>
            <h3 className="text-gray-600">Projects</h3>
         </div>
         <div className="text-center space-y-3 border-2 border-dashed p-6 rounded-lg">
            <h1 className="text-4xl font-serif">460</h1>
            <h3 className="text-gray-600">Missions</h3>
         </div>
      </div>
   );
};

export default About_number;