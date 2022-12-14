import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-8">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            About
          </h1>

          <p className="mt-6 text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
