import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3 lg:pt-4 h-16 sm:h-20 lg:h-24">
      <div className="flex custom-card-style h-full w-full px-4 sm:px-8 lg:px-12 xl:px-6 items-center justify-between">
        <div className="pb-[2px]">
          <Link
            href="/"
            className="font-playfairItalic font-semibold text-xl sm:text-2xl lg:text-3xl text-shadow"
          >
            @slowershutter
          </Link>
        </div>
        <div className="hidden h-12 justify-end lg:inline-flex font-playfairItalic text-2xl font-medium py-2 items-center">
          <Link href="/" className="px-3">
            home
          </Link>
          <div className="px-6">—</div>
          <Link href="/" className="px-3">
            gallery
          </Link>
          <div className="px-6">—</div>
          <Link href="/" className="px-3">
            contacts
          </Link>
        </div>
        <div className="hidden h-12 justify-end sm:inline-flex lg:hidden font-playfairItalic text-2xl font-medium py-2 items-center">
          <Link href="/" className="">
            <svg
              className="drop-shadow-md"
              id="Icons"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.588,8.191l-11-8a1,1,0,0,0-1.176,0l-11,8A1,1,0,0,0,1.588,9.809L3,8.782V21a2.006,2.006,0,0,0,2,2H9V14a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v9h4a2.006,2.006,0,0,0,2-2V8.782l1.412,1.027a1,1,0,1,0,1.176-1.618Z" />
            </svg>
          </Link>
          <Link href="/" className="pl-10">
            <svg
              className="drop-shadow-md"
              id="Icons"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19,1H5A4,4,0,0,0,1,5V19a4,4,0,0,0,4,4H19a4,4,0,0,0,4-4V5A4,4,0,0,0,19,1ZM7,5A2,2,0,1,1,5,7,2,2,0,0,1,7,5Zm12.707,9.707a1,1,0,0,1-1.414,0l-2.244-2.244-3.065,3.5-.007.011-.006,0L9.753,19.659a1,1,0,0,1-1.506-1.318L10.9,15.312,9,13.414,5.707,16.707a1,1,0,0,1-1.414-1.414l4-4a1,1,0,0,1,1.414,0l2.51,2.511,3.03-3.463a1.006,1.006,0,0,1,.72-.341.956.956,0,0,1,.74.293l3,3A1,1,0,0,1,19.707,14.707Z" />
            </svg>
          </Link>
          <Link href="/" className="pl-10">
            <svg
              className="drop-shadow-md"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ededed"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V6A3,3,0,0,0,20,3Zm-.328,12.62a1,1,0,1,1-1.344,1.48l-4.143-3.76a3.937,3.937,0,0,1-4.37,0L5.672,17.1a1,1,0,0,1-1.344-1.48l3.956-3.591L4.327,8.43A1,1,0,1,1,5.673,6.95l4.979,4.529a2.005,2.005,0,0,0,2.7,0L18.327,6.95a1,1,0,0,1,1.346,1.48l-3.956,3.6Z" />
            </svg>
          </Link>
        </div>

        <div className="inline-flex sm:hidden lg:hidden">
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
