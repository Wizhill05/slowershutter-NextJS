const SideNavbar = () => {
  return (
    <div className="flex h-full w-full py-2 sm:py-3 lg:py-4 pl-2 sm:pl-3 lg:pl-4">
      <div className="flex flex-col custom-card-style h-full w-full items-start justify-between font-playfairItalic text-2xl font-medium p-5">
        <div className="">
          <a
            href="/"
            className="font-playfairItalic font-semibold text-xl sm:text-2xl lg:text-3xl text-shadow"
          >
            @slowershutter
          </a>
        </div>
        <div className="grid gap-4 w-full">
          <div>
            <a href="/" className="">
              home
            </a>
          </div>
          <div>
            <a href="/" className="">
              gallery
            </a>
          </div>
          <div>
            <a href="/" className="">
              contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
