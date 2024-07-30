// import React from "react";

// const Header = () => {
//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://outdoor.ch/fileadmin/_processed_/b/0/csm_outdoor-adventure-guide-summer-23-cover-shot-web_a29e733c10.jpg')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-30"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white container transform -translate-x-20">
//         <h1 className="text-5xl font-bold mb-4">YOUR ADVENTURE STARTS HERE!</h1>
//         {/* <div className="w-full ml-0"> */}
//         <div className="w-full max-w-md my-20 ml-0 flex bg-white rounded-full">
//           <input
//             type="text"
//             className="w-full px-4 py-2 rounded-full text-gray-900 border-none focus:border-none"
//             placeholder="Search for activities, courses and more"
//           />
//           <button className="w-1/6 mr-2 text-xl">🔍</button>
//         </div>
//         {/* </div> */}
//         <div className="flex space-x-4 mt-24">
//           {[
//             "Ropes park",
//             "Mountaineering School",
//             "Team-Events",
//             "Must do's",
//             "Family Activities",
//             "Package Deals",
//           ].map((item, index) => (
//             <button
//               key={index}
//               className="bg-white text-black px-4 py-2 rounded-full shadow-md"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

// const Header = () => {
//   return (
//     <header
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage:
//           "url(https://d41chssnpqdne.cloudfront.net/user_upload_by_module/chat_bot/files/6836298/sCKkqhnPTqryIzEF.png)",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <div className="relative container mx-auto flex flex-col items-start justify-center h-full text-white text-left pl-8">
//         <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
//           YOUR ADVENTURE STARTS HERE!
//         </h1>
//         <div className="relative w-3/4 md:w-1/2 mb-8">
//           <input
//             type="text"
//             placeholder="Search for activities, courses and more"
//             className="p-4 rounded-lg w-full bg-white text-gray-800 placeholder-gray-500 pr-12"
//           />
//           <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
//             <FaSearch />
//           </button>
//         </div>
//         <nav className="flex flex-wrap justify-start space-x-4">
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Ropes Park
//           </button>
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Mountaineering School
//           </button>
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Team-Events
//           </button>
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Must do's
//           </button>
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Family Activities
//           </button>
//           <button className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
//             Package Deals
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url(https://outdoor.ch/fileadmin/_processed_/b/0/csm_outdoor-adventure-guide-summer-23-cover-shot-web_a29e733c10.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto flex flex-col pt-20 justify-evenly h-full text-white text-left px-4 pb-16 md:px-8 lg:px-16">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg p-10 pl-0 flex flex-col">
            <span className="bg-blue-500 max-w-max p-3 rounded-t-lg rounded-br-lg">
              YOUR ADVENTURE
            </span>
            <span className="bg-blue-500 max-w-max p-3 rounded-b-lg">
              STARTS HERE!
            </span>
          </h1>
          <div className="relative w-full md:w-3/4 lg:w-1/2 mb-8">
            <input
              type="text"
              placeholder="Search for activities, courses and more"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-4 rounded-lg w-full bg-white text-gray-800 placeholder-gray-500 pr-12"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full transition"
              onClick={() => navigate(`/activities/${searchTerm}`)}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-center space-x-2 space-y-2 md:space-x-4 md:space-y-0">
          {[
            "Ropes park",
            "Mountaineering School",
            "Team-Events",
            "Must do's",
            "Family Activities",
            "Package Deals",
          ].map((item, index) => (
            <button
              key={index}
              className="bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-full shadow-md hover:bg-opacity-60 transition z-10"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
