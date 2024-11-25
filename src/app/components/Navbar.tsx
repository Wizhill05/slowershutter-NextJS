const Navbar = () => {
  return (
    <nav className="fixed w-[calc(100vw-24px)] h-20 mt-3 mx-3 lg:mx-5 lg:w-[calc(100vw-40px)] lg:mt-5 bg-[#b6b6b621] z-50 custom-shadow rounded-md ">
      <div className="mx-auto px-5 sm:px-5 lg:px-8 items-center h-full max-w-[1440px]">
        <div className="flex justify-between h-full items-center">
          <div className="flex-shrink-0 pb-1">
            <a
              href="/"
              className="text-4xl font-semibold gradient-text font-playfair-i"
            >
              @slowershutter
            </a>
          </div>
          <div className="hidden sm:flex sm:space-x-8 font-geist-mono">
            <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
