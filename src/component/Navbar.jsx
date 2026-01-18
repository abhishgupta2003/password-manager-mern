const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          {"<Pass "}
          <span className="text-blue-500">OP/</span>
          {">"}
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            About 
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Contact Us 
          </li>
        </ul>

        
      </div>
    </nav>
  );
};

export default Navbar;
