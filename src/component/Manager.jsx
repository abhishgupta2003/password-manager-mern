import React from 'react'

const Manager = () => {
  return (
     <>
    <div className="relative min-h-screen flex flex-col items-center px-4">
  {/* Background */}
  <div className="absolute inset-0 -z-10 h-full w-full bg-white
    bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
    linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
    bg-[size:14px_24px]">
    <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px]
      rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
    </div>
  </div>

  {/* Logo */}
  <span className="mt-10 text-4xl font-bold">
    {"<Pass "}
    <span className="text-blue-500">OP/</span>
    {">"}
  </span>

  {/* Heading */}
  <h1 className="text-2xl font-semibold mt-4 text-gray-800">
    Welcome to Pass OP Manager
  </h1>

  {/* Card */}
  <div className="mt-10 w-full max-w-xl bg-white/80 backdrop-blur
    shadow-lg rounded-2xl p-6 space-y-4 border">

    <input
      className="w-full px-4 py-2 border rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-500"
      placeholder="Enter website"
      type="text"
    />

    <input
      className="w-full px-4 py-2 border rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-500"
      placeholder="Enter username"
      type="text"
    />

    <input
      className="w-full px-4 py-2 border rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-500"
      placeholder="Enter password"
      type="password"
    />

    <button
      className="w-full bg-blue-600 text-white py-2 rounded-lg
        hover:bg-blue-700 transition font-medium">
      Save Password
    </button>
  </div>
</div>

     </>
  )
}

export default Manager
