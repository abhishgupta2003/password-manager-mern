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
            Vault
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Generator
          </li>
        </ul>

        {/* Action Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg
          hover:bg-blue-700 transition font-medium">
          Add Password
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
