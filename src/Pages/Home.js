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
          Outdoor Adventures: Your Gateway to Unforgettable Experiences
        </h1>
        <p>
          We are to provide the best experiences for your trips and holidays.
        </p>
        <p>
          {" "}
          Embark on an exhilarating journey with us, where your outdoor
          adventure truly begins. At Outdoor, we believe in providing the best
          experiences for your trips and holidays. Our playground, tailored for
          Gen Z, offers a unique blend of real, healthy fun that connects you
          with nature and fosters unforgettable memories. Whether you're hiking,
          camping, or exploring new terrains, we ensure that every moment is
          filled with excitement and discovery. Join us and redefine your idea
          of adventure!
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
