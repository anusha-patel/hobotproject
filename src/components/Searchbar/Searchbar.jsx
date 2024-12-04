// import React, { useState } from "react";

// const Searchbar = () => {
//   const [service, setService] = useState("");
//   const [location, setLocation] = useState("");
//   const [results, setResults] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const services = [
//     "Plumbing",
//     "Electrical Repairs",
//     "House Cleaning",
//     "Carpentry",
//     "Appliance Repair",
//     "Gardening",
//     "Pest Control",
//   ];

//   const locations = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "San Francisco",
//     "Seattle",
//     "Miami",
//   ];

//   const mockData = [
//     { id: 1, service: "Plumbing", location: "New York", provider: "ABC Plumbing Co." },
//     { id: 2, service: "Electrical Repairs", location: "Los Angeles", provider: "ElectroFix Inc." },
//     { id: 3, service: "House Cleaning", location: "Chicago", provider: "CleanSweep Services" },
//     { id: 4, service: "Gardening", location: "Houston", provider: "GreenThumb Pros" },
//     { id: 5, service: "Pest Control", location: "Seattle", provider: "BugFree Solutions" },
//     { id: 6, service: "Carpentry", location: "Miami", provider: "WoodWorks Specialists" },
//     { id: 7, service: "Appliance Repair", location: "San Francisco", provider: "FixItNow Repair" },
//   ];

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (!service || !location) {
//       alert("Please enter both service and location.");
//       return;
//     }

//     const filteredResults = mockData.filter(
//       (item) =>
//         item.service.toLowerCase().includes(service.toLowerCase()) &&
//         item.location.toLowerCase().includes(location.toLowerCase())
//     );

//     setResults(filteredResults);
//     setIsModalOpen(true); 
// };

//     const closeModal = () => {
//         setIsModalOpen(false); // Close the modal
//         setLocation("");
//         setService("");
//       };


//   return (
//     <div className="p-5 w-full">
//       {/* Search Form */}
//       <form
//         onSubmit={handleSearch}
//         className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto space-y-5 md:space-y-0 md:space-x-5  p-5"
//       >
//         {/* Service Input */}
//         <div className="flex items-center bg-white border border-gray-300 rounded-lg  overflow-hidden shadow-sm w-full">
//           <img src="serviceicon.png" alt="Service Icon" className="h-6 w-6 ml-3" />
//           <input
//             type="text"
//             list="service-list"
//             placeholder="Search your required service here"
//             className="w-full px-4 py-2 text-black focus:outline-none "
//             value={service}
//             onChange={(e) => setService(e.target.value)}
//           />
//           <datalist id="service-list">
//             {services.map((service, index) => (
//               <option key={index} value={service} />
//             ))}
//           </datalist>
//         </div>

//         {/* Location Input */}
//         <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full">
//           <img src="locationicon.png" alt="Location Icon" className="h-6 w-6 ml-3" />
//           <input
//             type="text"
//             list="location-list"
//             placeholder="Search your desired location"
//             className="w-full px-4 py-2 text-black focus:outline-none  "
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <datalist id="location-list">
//             {locations.map((location, index) => (
//               <option key={index} value={location} />
//             ))}
//           </datalist>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-green-800 px-6 py-2 text-white rounded-md font-semibold hover:bg-white hover:text-green-800 border hover:border-green-800 transition"
//         >
//           Search
//         </button>
//       </form>


//        {/* Modal for Results */}
//        {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-5 w-3/4 max-w-lg">
//             <h2 className="text-xl font-bold mb-4">Search Results</h2>
//             {results.length > 0 ? (
//               <ul className="space-y-3">
//                 {results.map((result) => (
//                   <li key={result.id} className="p-3 border border-gray-200 rounded-md">
//                     <h3 className="font-semibold text-gray-600 text-lg">{result.provider}</h3>
//                     <p className="text-sm text-gray-600">
//                       {result.service} - {result.location}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500 text-center">No results found. Please refine your search.</p>
//             )}
//             <button
//               onClick={closeModal}
//               className="mt-5 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>

//   );
// };

// export default Searchbar;

import React, { useState } from "react";

const Searchbar = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    "Plumbing",
    "Electrical Repairs",
    "House Cleaning",
    "Carpentry",
    "Appliance Repair",
    "Gardening",
    "Pest Control",
  ];

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "San Francisco",
    "Seattle",
    "Miami",
  ];

  const mockData = [
    { id: 1, service: "Plumbing", location: "New York", provider: "ABC Plumbing Co." },
    { id: 2, service: "Electrical Repairs", location: "Los Angeles", provider: "ElectroFix Inc." },
    { id: 3, service: "House Cleaning", location: "Chicago", provider: "CleanSweep Services" },
    { id: 4, service: "Gardening", location: "Houston", provider: "GreenThumb Pros" },
    { id: 5, service: "Pest Control", location: "Seattle", provider: "BugFree Solutions" },
    { id: 6, service: "Carpentry", location: "Miami", provider: "WoodWorks Specialists" },
    { id: 7, service: "Appliance Repair", location: "San Francisco", provider: "FixItNow Repair" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (!service || !location) {
      alert("Please enter both service and location.");
      return;
    }

    const filteredResults = mockData.filter(
      (item) =>
        item.service.toLowerCase().includes(service.toLowerCase()) &&
        item.location.toLowerCase().includes(location.toLowerCase())
    );

    setResults(filteredResults);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLocation("");
    setService("");
  };

  return (
    <div className="p-5 w-full">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto space-y-5 md:space-y-0 md:space-x-5 p-5"
      >
        {/*  Service Input */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full   md:w-1/3">
          <img src="serviceicon.png" alt="Service Icon" className="h-4 w-4 md:h-6 md:w-6 ml-3" />
          <input
            type="text"
            list="service-list"
            placeholder="Search your required service here"
            className=" w-full text-sm  px-4 py-2 text-black focus:outline-none"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
          <datalist id="service-list" className=" ">
            {services.map((service, index) => (
              <option className="" key={index} value={service} />
            ))}
          </datalist>
        </div>

      {/* Location Input */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full md:w-1/3">
          <img src="locationicon.png" alt="Location Icon" className="h-4 w-4 md:h-6 md:w-6 ml-3" />
          <input
            type="text"
            list="location-list"
            placeholder="Search your desired location"
            className="w-full text-sm  px-4 py-2 text-black focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <datalist id="location-list" className="">
            {locations.map((location, index) => (
              <option key={index} value={location} />
            ))}
          </datalist>
        </div>

      {/* Submit Button */}
      <button
          type="submit"
          className="bg-green-800 px-6 py-2 text-white rounded-md font-semibold hover:bg-white hover:text-green-800 border hover:border-green-800 transition md:w-1/4"
        >
          Search
        </button>
      </form> 





      {/* Modal for Results */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-3/4 max-w-lg">
            <h2 className="text-xl font-bold mb-4">Search Results</h2>
            {results.length > 0 ? (
              <ul className="space-y-3">
                {results.map((result) => (
                  <li key={result.id} className="p-3 border border-gray-200 rounded-md">
                    <h3 className="font-semibold text-gray-600 text-lg">{result.provider}</h3>
                    <p className="text-sm text-gray-600">
                      {result.service} - {result.location}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No results found. Please refine your search.</p>
            )}
            <button
              onClick={closeModal}
              className="mt-5 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

