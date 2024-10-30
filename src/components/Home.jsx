import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import data from "../data.json";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

function Home() {
  const lenis = useLenis(({ scroll }) => {
    // Custom scroll effects if needed
  });

  return (
    <ReactLenis root>
      <div className="text-black content-grid">
        <Navbar />
        <div className="layout">
          {data.map((d) => (
            <ImageCard key={d.id} data={d} />
          ))}
        </div>
      </div>
    </ReactLenis>
  );
}

function ImageCard({ data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = data.imageUrl;

    img.onload = () => setLoading(false);
    img.onerror = () => setLoading(false); // Handle error state if needed
  }, [data.imageUrl]);

  return (
    <Link to={`${data.photographer.replace(/\s+/g, "")}`}>
      <div className="card relative">
        {loading ? (
          <div className="skeleton-card animate-pulse bg-gray-300 h-64 w-48 sm:w-36 md:w-80 relative">
            <div className="absolute bottom-0 left-0 text-white p-4 z-10">
              <h3 className="animate-pulse bg-gray-400 h-6 w-36 rounded mb-2"></h3>
              <h4 className="animate-pulse bg-gray-400 h-4 w-28 rounded"></h4>
            </div>
          </div>
        ) : (
          <div>
            <img
              src={data.imageUrl}
              alt={`${data.title}-image`}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 text-white p-4">
              <h3 className="text-3xl font-semibold">{data.title}</h3>
              <h4 className="text-base">{data.photographer}</h4>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default Home;
