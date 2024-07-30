import React from "react";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import MustDos from "../Components/MustTodos";
import * as data from "../data";
import Newsletter from "../Components/Newsletter";
import Stories from "../Components/Stories";

export default function Home() {
  return (
    <>
      {/* <SearchBar />
       */}
      <Header />
      <div className="w-1/2 mx-auto my-20">
        <h1 className="font-extrabold text-4xl my-5">
          {" "}
          Welcome to OUTDOORZZZ{" "}
        </h1>
        <p>
          We are to provide the best experiences for your trips and holidays.
        </p>
        <p>
          {" "}
          Your outdoor adventure starts here // Outdoor is .. // Playground of
          GenZZZ // Outdoor is the real/healthy fun{" "}
        </p>
      </div>
      <MustDos mustDos={data.summer} />
      <Newsletter />
      {/* <MustDos mustDos={data.winter} />
      <MustDos mustDos={data.autumn} /> */}
      <Stories />
      {/* <MustDos mustDos={data.mountains} />
      <MustDos mustDos={data.spring} /> */}
    </>
  );
}
