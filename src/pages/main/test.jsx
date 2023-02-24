import React from 'react'

export default function Test() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="max-w-2xl mx-auto">
       
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center text-gray-900 mb-8">
              Welcome to Greathill
            </h1>
          
            <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
              We provide top-quality computer solutions to help your business
              grow and succeed.
            </p>
            <div className="flex justify-center">
              <button className="bg-indigo-600 text-white rounded-lg px-8 py-4 font-medium text-lg mr-4 hover:bg-indigo-500">
                Get Started
              </button>
              <button className="bg-transparent text-indigo-600 border border-indigo-600 rounded-lg px-8 py-4 font-medium text-lg hover:bg-indigo-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>









      <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-8">
            Our Services
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cloud Computing</h3>
                <p className="text-gray-700 mb-4">We offer customized cloud computing solutions that are designed to meet the unique needs of your business. Whether you're looking to migrate to the cloud, manage your existing cloud infrastructure, or optimize your cloud performance, our team has the expertise to help you succeed.</p>
                <a href="#" className="text-gray-900 font-semibold hover:underline">Learn More &rarr;</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-700 mb-4">Our data analytics services can help you unlock the full potential of your data. We offer a range of solutions, from data warehousing and data visualization to machine learning and predictive analytics, that can help you gain insights into your business and make informed decisions.</p>
                <a href="#" className="text-gray-900 font-semibold hover:underline">Learn More &rarr;</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Network Security</h3>
                <p className="text-gray-700 mb-4">Our network security services are designed to help you protect your business from cyber threats. We offer a range of solutions, from firewall management and intrusion detection to vulnerability scanning and risk assessments, that can help you safeguard your network and data.</p>
                <a href="#" className="text-gray-900 font-semibold hover:underline">Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
