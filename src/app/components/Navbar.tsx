const Navbar = () => {
  return (
    <nav className="fixed w-[calc(100vw-24px)] h-20 mt-3 mx-3 lg:mx-5 lg:w-[calc(100vw-40px)] lg:mt-5 custom-card-style">
      <div className="mx-auto px-5 sm:px-5 lg:px-8 items-center h-full">
        <div className="flex justify-between h-full items-center">
          <div className="pb-1">
            <a
              href="/"
              className="text-3xl font-semibold gradient-text font-playfair-i pr-1 sm:text-4xl lg:text-4xl "
            >
              @slowershutter
            </a>
          </div>
          <div className="hidden sm:flex space-x-1 text-shadow shadow-slate-800 ">
            <a href="/" className=" px-3 py-2">
              Home
            </a>
            <a href="/gallery" className=" px-3 py-2">
              Gallery
            </a>
            <a href="/contact" className=" px-3 py-2">
              Contact
            </a>
          </div>
          <div className="flex lg:hidden sm:hidden text-shadow shadow-slate-800">
            Menu
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
