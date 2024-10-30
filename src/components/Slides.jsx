import React from "react";
import { Link, Navigate,useParams } from "react-router-dom";
import data from "../data.json";
import Navbar from "./Navbar";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

function Slides() {
  const { photographer } = useParams();
  const slideData = data.find(d => d.photographer.replace(/\s+/g, "") === photographer);

  if (!slideData) {
    return <Navigate to="*" />;
  }

  return (
    <div className="content-grid">
        <Navbar />
        <div className="flex flex-col md:flex-row items-center py-6">
          <div className="relative  ">
              <img className="w-[40%] object-cover" src={slideData.imageUrl} alt={slideData.title} />
              <img className="w-[20%]" src={slideData.authorImg} alt={slideData.photographer} />
              <div className="absolute top-0 right-0">
              <h1>{slideData.title}</h1>
              <h2>{slideData.photographer}</h2>

              </div>
          </div>
          <div className="h-[80%] relative px-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 text-[200px] font-bold text-gray-300/90 leading-none z-[-1]">{slideData.dateAdded}</div>
            <p className="w-[50ch] pt-36">{slideData.description}</p>
            <a href={`${slideData.source}`} className="uppercase ">go to source</a>
          </div>
        </div>

        <footer className="sticky bottom-0 py-6 w-full bg-white full-width">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h5 className="text-xl">{slideData.title}</h5>
                    <h6 className="text-sm">{slideData.photographer}</h6>
                </div>
                <div className="flex gap-4">
                    <RxTrackPrevious size={40}/>
                    <RxTrackNext size={40}/>
                </div>
            </div>

        </footer>

    </div>
  );
}

export default Slides;

