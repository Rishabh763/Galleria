import React from "react";
// import Navbar from "./Navbar";
import { FaGhost } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <div className="content-grid">
      <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      {/* <Navbar /> */}
        <FaGhost
          className="w-20 h-20 mb-8 text-muted-foreground"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-center max-w-md">
          Oops! The page you're looking for seems to have vanished into thin
          air.
        </p>
        <button className="rounded bg-black text-white px-4 py-3 hover:bg-black/90 transition-opacity">
        <Link to="/">
          Return to Home
        </Link>
      </button>
      </main>
    </div>
  );
}

export default Nopage;
