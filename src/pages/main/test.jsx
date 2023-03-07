import React, { useState, useEffect } from "react";

export default function Test() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

return(
  <div className="bg-cover bg-center h-screen flex items-center justify-center relative">
  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 backdrop-filter backdrop-blur-lg" />
  <div className="z-10 p-6 rounded-md bg-gray-100">
    <h1 className="text-3xl font-bold mb-4">Hello, World!</h1>
    <p className="text-lg">
      This is a glass effect created using Tailwind CSS.
    </p>
  </div>
</div>

)
}



