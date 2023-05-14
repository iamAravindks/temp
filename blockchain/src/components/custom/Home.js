import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showComponents, setShowComponents] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-auto mx-5 h-screen  ">
        <h2 className="pb-4 text-center text-3xl font-extrabold text-gray-900">
          Online Voting System
        </h2>
        <div className={`flex filter flex-col lg:flex-row rounded-lg py-4 `}>
          <div className="my-auto mx-auto items-center justify-center pl-2">
            <img
              className="mt-3  max-w-lg lg:h-48 lg:w-48 md:h-56 md:w-56 w-32 h-32 rounded-md object-cover"
              src={`https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80`}
            />
          </div>

          <div className="py-4 px-8 flex flex-col my-auto md:max-w-l lg:max-w-md">
            <p className="text-gray-700 mb-4 text-sm">
              Welecome to Online Voting System, a secured voting system built
              using Ethereum blockchain. Your vote will be confidential and will
              not be revealed to anyone
            </p>
          </div>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
          </div>
          <div className="-m-2 flex flex-wrap">
            <div>
              <Link to="/choose" className="secondary-content">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 m-12 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  User Log In
                </button>
              </Link>
            </div>

            <div>
              <Link to="/login" className="secondary-content">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  Admin Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
