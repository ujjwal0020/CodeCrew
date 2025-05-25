import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div className="bg-base-300 text-white">
      
      <section className="min-h-screen flex items-center py-8 sm:py-12 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-yellow-500 uppercase">
                A social media for Developers
              </p>
              <h1 className="mt-2 text-4xl font-bold text-white sm:text-6xl xl:text-8xl leading-tight">
                Match with Developers who inspire
              </h1>
              <p className="mt-2 text-base  text-yellow-500 sm:text-xl">
                Swipe into the world of developers.
              </p>

              <Link
                to="/login"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-500 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
              >
                Join for free
                <svg
                  className="w-6 h-6 ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              <p className="mt-5 text-zinc-200">
                Already joined us?{" "}
                <Link to="/login" className="text-yellow-500 hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            <div className="flex justify-center">
              <img
                className="w-full max-w-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt="Hero Graphic"
              />
            </div>
          </div>
        </div>
      </section>
<WhyChoose/>
      <Footer />
    </div>
  );
};

export default Home;
