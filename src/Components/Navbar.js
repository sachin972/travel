// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { funActivities } from "../data";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showActivity, setShowActivity] = useState(false);
//   const navigate = useNavigate();
//   const [land, setLand] = useState([]);
//   const [snow, setSnow] = useState([]);
//   const [air, setAir] = useState([]);
//   const [mountain, setMountain] = useState([]);
//   const [water, setWater] = useState([]);

//   useEffect(() => {
//     function f() {
//       const a = funActivities.filter((activity) => activity.category == "land");
//       setLand(a);
//       const b = funActivities.filter(
//         (activity) => activity.category == "water"
//       );
//       setWater(b);
//       const c = funActivities.filter((activity) => activity.category == "air");
//       setAir(c);
//       const d = funActivities.filter(
//         (activity) => activity.category == "mountain"
//       );
//       setMountain(d);
//       const e = funActivities.filter((activity) => activity.category == "snow");
//       setSnow(e);
//     }
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const mountains = () => {
//     const res = mountain.map((a) => <div>{a.activity}</div>);
//     console.log(res);
//     return res;
//   };

//   const snows = () => {
//     const res = mountain.map((a) => <div>{a.activity}</div>);
//     return res;
//   };

//   const airs = () => {
//     const res = mountain.map((a) => <div>{a.activity}</div>);
//     return res;
//   };

//   const lands = () => {
//     const res = mountain.map((a) => <div>{a.activity}</div>);
//     return res;
//   };

//   const waters = () => {
//     const res = mountain.map((a) => <div>{a.activity}</div>);
//     return res;
//   };

//   return (
//     <div className="items-center p-4 bg-white shadow-md w-full fixed top-0 z-10">
//       <div className="container flex items-center justify-between mx-auto">
//         <div
//           className="font-bold text-xl"
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           O+ OUTDOOR
//         </div>
//         <div className="flex space-x-6 ml-8">
//           <div
//             className="flex items-center space-x-2 cursor-pointer hover:text-blue-400"
//             onClick={() => {
//               setShowActivity(!showActivity);
//             }}
//           >
//             <span>🏞️</span>
//             <span>Activities</span>
//           </div>
//           <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
//             <span>🧭</span>
//             <span>Explore</span>
//           </div>
//         </div>
//         <div className="cursor-pointer" onClick={toggleSidebar}>
//           <div className="flex flex-col space-y-1">
//             <div className="w-6 h-1 bg-black"></div>
//             <div className="w-6 h-1 bg-black"></div>
//             <div className="w-6 h-1 bg-black"></div>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
//           <div className="fixed right-0 top-0 w-1/4 h-full bg-white shadow-md p-4 z-20">
//             <button
//               className="text-black font-bold mb-4"
//               onClick={toggleSidebar}
//             >
//               Close
//             </button>
//             <ul>
//               <li className="p-2 border-b">Menu Item 1</li>
//               <li className="p-2 border-b">Menu Item 2</li>
//               <li className="p-2 border-b">Menu Item 3</li>
//             </ul>
//           </div>
//         </div>
//       )}
//       {showActivity && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
//           <div className="right-0 top-48 left-0 w-full h-3/4 bg-white shadow-md p-4 z-20">
//             <div className="flex">
//               <div className="flex flex-col">{mountains()}</div>
//               <div className="flex flex-col">{airs()}</div>
//               <div className="flex flex-col">{lands()}</div>
//               <div className="flex flex-col">{waters()}</div>
//               <div className="flex flex-col">{snows()}</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { funActivities } from "../data";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const navigate = useNavigate();
  const [land, setLand] = useState([]);
  const [snow, setSnow] = useState([]);
  const [air, setAir] = useState([]);
  const [mountain, setMountain] = useState([]);
  const [water, setWater] = useState([]);

  useEffect(() => {
    const a = funActivities.filter((activity) => activity.category === "land");
    setLand(a);
    const b = funActivities.filter((activity) => activity.category === "water");
    setWater(b);
    const c = funActivities.filter((activity) => activity.category === "air");
    setAir(c);
    const d = funActivities.filter(
      (activity) => activity.category === "mountain"
    );
    setMountain(d);
    const e = funActivities.filter((activity) => activity.category === "snow");
    setSnow(e);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActivities = (activities) => {
    return activities.map((activity, index) => (
      <div
        key={index}
        onClick={() => {
          navigate(`/activity/${activity.id}`);
        }}
      >
        {activity.activity}
      </div>
    ));
  };

  return (
    <div>
      <div className="items-center p-4 bg-white shadow-md w-full fixed top-0 z-30">
        <div className="container flex items-center justify-between mx-auto">
          <div
            className="font-bold text-xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            O+ OUTDOOR
          </div>
          <div className="flex space-x-6 ml-8">
            <div
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-400"
              onClick={() => setShowActivity(!showActivity)}
            >
              <span role="img" aria-label="activities">
                🏞️
              </span>
              <span>Activities</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
              <span role="img" aria-label="explore">
                🧭
              </span>
              <span>Explore</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30">
            <div className="fixed right-0 top-0 w-1/4 h-full bg-white shadow-md p-4 z-40">
              <button
                className="text-black font-bold mb-4"
                onClick={toggleSidebar}
              >
                Close
              </button>
              <ul>
                <li className="p-2 border-b cursor-pointer">Menu Item 1</li>
                <li className="p-2 border-b cursor-pointer">Menu Item 2</li>
                <li className="p-2 border-b cursor-pointer">Menu Item 3</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Activity Section */}
      {showActivity && (
        <div className="fixed inset-x-0 top-16 h-1/2 bg-white shadow-md p-4 z-20">
          <div className="flex overflow-x-auto space-x-4 justify-evenly">
            <div className="flex flex-col">
              <h2 className="font-bold mb-2">Mountain</h2>
              {renderActivities(mountain)}
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold mb-2">Air</h2>
              {renderActivities(air)}
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold mb-2">Land</h2>
              {renderActivities(land)}
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold mb-2">Water</h2>
              {renderActivities(water)}
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold mb-2">Snow</h2>
              {renderActivities(snow)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
