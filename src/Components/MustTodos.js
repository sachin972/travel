import React from "react";

const MustDos = ({ mustDos }) => {
  return (
    <div className="bg-gray-100">
      <div className="p-6  w-1/2 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Summer Must Do's
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {mustDos.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 col-span-${item.colSpan} row-span-${item.rowSpan}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MustDos;
