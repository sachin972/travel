import React, { useRef } from "react";
import "./Stories.css";

const storiesData = [
  {
    title: "Via Ferrata | Mürren cliff walk",
    category: "Climbing",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "The Ultimate Playground! Interlaken, Switzerland",
    category: "Interlaken",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: 'Welcome to the Glacier Canyon or "Gletscherschlucht"',
    category: "Adventure",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "What to bring on your Interlaken adventures",
    category: "Adventure",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "Aletsch Glacier Hike - The most beautiful hike of your life",
    category: "Mountains",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "Exploring the Swiss Alps",
    category: "Mountains",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: 'Welcome to the Glacier Canyon or "Gletscherschlucht"',
    category: "Adventure",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "What to bring on your Interlaken adventures",
    category: "Adventure",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "Aletsch Glacier Hike - The most beautiful hike of your life",
    category: "Mountains",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
  {
    title: "Exploring the Swiss Alps",
    category: "Mountains",
    imageUrl:
      "https://outdoor.ch/fileadmin/_processed_/9/7/csm_Basic-Course-Mountaineering-Summer04_7fc6f7fd05.jpg", // Replace with actual image URL
  },
];

const Stories = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Stories</h2>
        <div className="flex items-center">
          <div
            className="overflow-x-auto flex-grow scrollbar-hidden"
            ref={scrollRef}
          >
            <div className="flex space-x-4 p-28 pt-9">
              {storiesData.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md w-64 flex-shrink-0"
                >
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {story.category}
                    </h3>
                    <p className="text-gray-600 mt-1">{story.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center flex items-center justify-between">
          <div>
            <a href="#" className="text-blue-600 hover:underline">
              → Outdoor blog
            </a>
          </div>
          <div>
            <button
              onClick={() => scroll(-300)}
              className="text-black p-3 rounded-full hover:bg-slate-300 text-2xl"
            >
              &lt;
            </button>
            <button
              onClick={() => scroll(300)}
              className="text-black p-3 rounded-full hover:bg-slate-300 text-2xl"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
