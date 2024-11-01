import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import Navbar from "./Navbar";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

function Slides() {
  const { photo } = useParams();
  const navigate = useNavigate();

  const initialIndex = data.findIndex(
    (d) => d.name.replace(/\s+/g, "") === photo
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (initialIndex === -1) {
    return <Navigate to="*" />;
  }

  const slideData = data[currentIndex];

  const handleIncrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDecrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    navigate(`/${data[currentIndex].name.replace(/\s+/g, "")}`);
  }, [currentIndex, navigate]);

  return (
    <div className="content-grid">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-6">
        <div className="relative">
          <img
            className="w-[80%] object-cover"
            src={slideData.images.gallery}
            alt={slideData.name}
          />
          <img
            className="size-32 object-cover  absolute bottom-0 right-0"
            src={slideData.artist.image}
            alt={slideData.artist.name}
          />
          <div className="absolute top-0 right-0 px-12 py-8 bg-white">
            <h1 className="text-5xl font-semibold mb-4">{slideData.name}</h1>
            <h2 className="text-base">{slideData.artist.name}</h2>
          </div>
        </div>
        <div className="h-[80%] relative px-8 flex flex-col justify-between leading-loose">
          <div className="absolute top-0 right-0 text-[200px] font-bold text-gray-300/90 mx-auto leading-none z-[-1]">
            {slideData.year}
          </div>
          <p className="w-[50ch] pt-36">{slideData.description}</p>
          <a href={slideData.source} className="uppercase">
            go to source
          </a>
        </div>
      </div>

      <footer className="sticky bottom-0 py-6 w-full bg-white full-width">
        <div className="w-full flex justify-between items-center">
          <div>
            <h5 className="text-xl">{slideData.name}</h5>
            <h6 className="text-sm">{slideData.artist.name}</h6>
          </div>
          <div className="flex gap-4">
            <RxTrackPrevious size={40} onClick={handleDecrement} />
            <RxTrackNext size={40} onClick={handleIncrement} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Slides;
