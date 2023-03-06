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
    <section className="bg-white dark:bg-gray-900"
    style={{ 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", backgroundImage: "url('https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')" }}>
  
  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
      Lets Make a Wonderful {' '}
      <span className="text-blue-500">Blockchain Solution.</span>
    </h2>
    <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
      officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus
      hic explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
    </p>
  
  </div>
</section>

<section className="py-10 bg-gray-800 lg:py-0">
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
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Why Should your choose?
          </p>
          <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Get work done, fast!
          </h2>
          <p className="text-xl leading-relaxed text-gray-200 mt-9">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia conse duis enim velit mollit. Exercitation
            veniam.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-gray-200">
            Velit officia conse duis enim velit mollit. Exercit ation veniam
            consequat sunt nostrud amet.
          </p>
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            {" "}
            Explore more{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

</>

  )
}