import React from 'react';
import { Link } from 'react-router-dom';

function First() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
        <h1 className="block text-3xl font-m text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white ">
          Start your journey with <span className="text-blue-600 font-semibold">Greathill</span>
        </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            We provide top-quality computer solutions to help your business grow
            and succeed.
          </p>
          <button className="btn px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            <Link to="/contact">  Get started  >
           
            </Link>
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </section>
  );
}
export default First;
