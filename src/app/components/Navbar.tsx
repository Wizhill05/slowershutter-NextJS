const Navbar = () => {
  return (
    <nav className="w-full p-2 sm:p-3 lg:p-4 h-20 sm:h-[100px] lg:h-[120px]">
      <div className="flex custom-card-style h-full w-full px-4 sm:px-8 items-center justify-between">
        <div className="pb-1">
          <a
            href="/"
            className="font-playfairItalic font-semibold text-2xl sm:text-3xl lg:text-4xl"
          >
            @slowershutter
          </a>
        </div>
        <div className="">
          <svg width="28" height="28" viewBox="0 0 25 24" fill="#ededed">
            <path
              d="M6.3125 13.7558C5.346 13.7559 4.5625 12.9723 4.5625 12.0059V11.9959C4.5625 11.0294 5.346 10.2458 6.3125 10.2458C7.279 10.2458 8.0625 11.0294 8.0625 11.9958V12.0058C8.0625 12.9723 7.279 13.7558 6.3125 13.7558Z"
              fill="#ededed"
            />
            <path
              d="M18.3125 13.7558C17.346 13.7558 16.5625 12.9723 16.5625 12.0058V11.9958C16.5625 11.0294 17.346 10.2458 18.3125 10.2458C19.279 10.2458 20.0625 11.0294 20.0625 11.9958V12.0058C20.0625 12.9723 19.279 13.7558 18.3125 13.7558Z"
              fill="#ededed"
            />
            <path
              d="M10.5625 12.0058C10.5625 12.9723 11.346 13.7558 12.3125 13.7558C13.279 13.7558 14.0625 12.9723 14.0625 12.0058V11.9958C14.0625 11.0294 13.279 10.2458 12.3125 10.2458C11.346 10.2458 10.5625 11.0294 10.5625 11.9958V12.0058Z"
              fill="#ededed"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
