import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { funActivities } from "../data";

const Activities = () => {
  const { query } = useParams();
  const [displayData, setDisplayData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const f = () => {
      const filtered = funActivities.filter(
        (activity) =>
          activity?.location?.toLowerCase()?.includes(query.toLowerCase()) ||
          activity?.activity?.toLowerCase()?.includes(query.toLowerCase()) ||
          activity?.activityDetails
            ?.toLowerCase()
            ?.includes(query.toLowerCase())
      );
      setDisplayData(filtered);
      //   return filtered;
    };

    f();
    console.log(displayData);
    console.log(funActivities);
  }, [query]);

  const card = (data) => {
    return (
      <div className="flex flex-wrap p-1 pt-0 justify-center items-center">
        {data.map((story, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md w-64 flex-shrink-0 m-10"
            onClick={() => {
              navigate(`/activity/${story.id}`);
            }}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {story.location}
              </h3>
              <p className="text-gray-600 mt-1">{story.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-full ">
      <div className="min-h-screen  mt-28 w-full flex flex-col">
        <div className="w-full text-2xl text-gray-600  text-center">
          Activities for {query}:
        </div>
        {displayData.length ? (
          <div className="">{card(displayData)}</div>
        ) : (
          <h1 className="text-center text-4xl my-auto transform -translate-y-36">
            No results found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Activities;
