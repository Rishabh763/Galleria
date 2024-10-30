import React from "react";
import Navbar from "./Navbar";
import data from "../data.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-black content-grid">
      <Navbar />
      <div className="layout">
        {
            data.map((d,index)=>{
                return(
                    <Link to={`${d.photographer.replace(/\s+/g, "")}`}>
                      <div key={d.id} className="card relative border-black">
                          <img src={`${d.imageUrl}`} alt=""/>
                          <div className="absolute bottom-0 left-0 text-white p-4">
                              <h3 className="text-3xl font-semibold">{d.title}</h3>
                              <h4 className="text-base">{d.photographer}</h4>
                          </div>
                      </div>
                    </Link>
                )
            })

        }

      </div>
    </div>
  );
}

export default Home;
