import React, { useState } from 'react';

const Manager = () => {
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({
    site: '',
    username: '',
    password: ''
  });

  const savePassword = () => {
    if (form.site && form.username && form.password) {
      setPasswordArray([...passwordArray, form]);
      setForm({ site: '', username: '', password: '' });
    }
  };

  const deletePassword = (index) => {
    const updatedArray = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updatedArray);
  };

  const editPassword = (index) => {
    setForm(passwordArray[index]);
    deletePassword(index);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center px-4 pb-12">
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
          shadow-lg rounded-2xl p-6 space-y-4 border border-gray-200">

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-200"
            placeholder="Enter website"
            type="text"
            name="site"
            value={form.site}
            onChange={handleChange}
          />

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-200"
            placeholder="Enter username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-200"
            placeholder="Enter password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button  
            onClick={savePassword}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg
              hover:bg-blue-700 active:bg-blue-800 transition duration-200 
              font-medium shadow-md">
            Save Password
          </button>
        </div>

        {/* Passwords Table Section */}
        <div className="passwords mt-16 w-full max-w-5xl">
          <h2 className="font-bold text-2xl py-4 text-gray-800 mb-6">
            Your Passwords
          </h2>

          {passwordArray.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl border-2 
              border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No passwords saved yet</p>
            </div>
          )}

          {passwordArray.length !== 0 && (
            <div className="bg-white/80 backdrop-blur shadow-lg rounded-xl 
              overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 
                  text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Site</th>
                    <th className="py-4 px-6 text-left font-semibold">Username</th>
                    <th className="py-4 px-6 text-left font-semibold">Password</th>
                    <th className="py-4 px-6 text-center font-semibold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {passwordArray.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition duration-150"
                    >
                      <td className="py-4 px-6">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:text-blue-800 
                            hover:underline font-medium break-all"
                        >
                          {item.site}
                        </a>
                      </td>

                      <td className="py-4 px-6 text-gray-700">
                        {item.username}
                      </td>

                      <td className="py-4 px-6 font-mono text-gray-700 
                        tracking-wider">
                        {"•".repeat(item.password.length)}
                      </td>

                      <td className="py-4 px-6 text-center space-x-3">
                        <button
                          onClick={() => editPassword(index)}
                          className="inline-block px-4 py-1.5 bg-blue-500 
                            text-white rounded-lg text-sm font-medium 
                            hover:bg-blue-600 active:bg-blue-700 
                            transition duration-200 shadow-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deletePassword(index)}
                          className="inline-block px-4 py-1.5 bg-red-500 
                            text-white rounded-lg text-sm font-medium 
                            hover:bg-red-600 active:bg-red-700 
                            transition duration-200 shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
