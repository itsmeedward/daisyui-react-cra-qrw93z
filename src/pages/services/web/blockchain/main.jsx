import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

export default function Blockchain(){
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://assets8.lottiefiles.com/private_files/lf30_3dqqvcq2.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  return(
    <>
    <section className="bg-black "
    style={{ 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", backgroundImage: "url('')" }}>

  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
      Lets Make a Wonderful {' '}
      <span className="text-blue-500">Blockchain Solution.</span>
    </h2>
    <p className="max-w-4xl mt-6 text-center  dark:text-gray-300">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
      officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus
      hic explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
    </p>
  
  </div>
</section>

<section className="py-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black lg:py-0">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
      <div className="h-full pr-12 lg:order-2 lg:mb-40">
        <div className="relative h-full lg:h-auto">
          <div className="absolute w-full h-full -mb-12 overflow-hidden top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
          
          </div>
          <div className="relative lg:-top-12">
         
          <Lottie
          className="object-cover object-right w-full h-full scale-150"
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true
          }}
        />
            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
        <div>
          <p className="text-sm text-white font-semibold tracking-widest  uppercase">
            Why Should your choose?
          </p>
          <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Get work done, fast!
          </h2>
          <p className="text-xl leading-relaxed text-white mt-9">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia conse duis enim velit mollit. Exercitation
            veniam.
          </p>
          <p className="mt-6 text-xl text-white leading-relaxed ">
            Velit officia conse duis enim velit mollit. Exercit ation veniam
            consequat sunt nostrud amet.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>


<>
  {/* Hero */}
  <div className="bg-slate-900 border-t border-gray-400">
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
       
        {/* Title */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-500">
            Now it's easier than ever to build products
          </h1>
        </div>
        {/* End Title */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
            Preline is a large open-source project, crafted with Tailwind CSS
            framework by Hmlstream.
          </p>
        </div>
       
      </div>
    </div>
  </div>
  {/* End Hero */}



  <section className="text-gray-600 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        1
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font  mb-1 text-xl">
            Shooting Stars
          </h2>
          <p className="leading-relaxed">
            VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
            bespoke try-hard cliche palo santo offal.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        2
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font  mb-1 text-xl">
            The Catalyzer
          </h2>
          <p className="leading-relaxed">
            VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
            bespoke try-hard cliche palo santo offal.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        3
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <circle cx={12} cy={5} r={3} />
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font  mb-1 text-xl">
            The 400 Blows
          </h2>
          <p className="leading-relaxed">
            VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
            bespoke try-hard cliche palo santo offal.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        4
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font  mb-1 text-xl">
            Neptune
          </h2>
          <p className="leading-relaxed">
            VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
            bespoke try-hard cliche palo santo offal.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<>
  {/* Features */}
  <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
    {/* Title */}
    <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
      <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
        Explore tools
      </h2>
      <p className="mt-3 text-gray-800 dark:text-gray-200">
        The powerful and flexible theme for all kinds of businesses.
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
      {/* Icon Block */}
      <div className="col-span-6 sm:col-span-4 text-center">
        <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Responsive
          </h3>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div className="col-span-6 sm:col-span-4 text-center">
        <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
        </svg>
        <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Customizable
          </h3>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
        <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            24/7 Support
          </h3>
        </div>
      </div>
      {/* End Icon Block */}
    </div>
    {/* End Grid */}
    {/* Grid */}
    <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
      <div className="hidden md:block col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>

</>

</>

  )
}