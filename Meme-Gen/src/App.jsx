import React from "react";
import { fetchGIFs, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  const getPhotos = () => {};
  return (
    <div className="h-screen w-full text-teal-500 text-7xl bg-gray-950">
      <button
        className="border-2"
        onClick={ async() => {
          const data = await fetchPhotos("dog");
          console.log(data.results);
          
        }}
      >
        Get Photos
      </button>
      <button
        className="border-2 mt-5"
        onClick={ async() => {
          const data = await fetchVideos("dog");
          console.log(data.videos);
          
        }}
      >
        Get Videos
      </button>
      <button
        className="border-2 mt-5"
        onClick={ async() => {
          const data = await fetchGIFs("dog");
          console.log(data.results);
          
        }}
      >
        Get GIFs
      </button>
    </div>
  );
};

export default App;
