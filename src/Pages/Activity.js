import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { funActivities } from "../data";

const Activity = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    function f() {
      const res = funActivities.filter((activity) => activity.id == id);
      setData(res);
      console.log(id, res);
    }

    f();
  }, [id]);
  return (
    <div className="min-h-screen w-full">
      <div className="flex md:flex-row flex-col w-full min-h-screen">
        <div className="md:w-3/4 w-full">
          <img src={`${data[0]?.image}`} className="pt-28 p-16 w-full h-full" />
        </div>
        <div className="md:w-1/4 w-full pt-28 px-5">
          <h1 className="text-2xl font-extrabold">{data[0]?.activity}</h1>
          <h2 className="text-xl pt-10">Location: {data[0]?.location}</h2>
          <h3 className="text-xl">{data[0]?.activityDetails}</h3>
        </div>
      </div>
      {/* <img > */}
    </div>
  );
};

export default Activity;
