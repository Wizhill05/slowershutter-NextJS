export default function Gallery() {
  return (
    <div className="h-screen w-full custom-gradient">
      <div className="width-full"></div>
      <div className="fixed w-[calc(100vw-24px)]  mx-3 lg:mx-5 h-[calc(100vh-116px)] lg:h-[calc(100vh-140px)] lg:w-[calc(100vw-40px)] mt-[104px] lg:mt-[120px] custom-card-style overflow-y-auto hide-scrollbar">
        <div className="fixed w-[calc(100%-24px)] lg:w-[calc(100%-40px)] h-40 bottom-3 rounded-lg bg-gradient-to-t from-[#150268] to-[#2c00f101] pointer-events-none"></div>
        <div className="h-full w-full px-5 sm:px-5 lg:px-8 pt-20">
          <h1 className="font-playfair-i text-[#e2e2e2] text-6xl font-light text-center ">
            gallery
          </h1>
        </div>
      </div>
    </div>
  );
}
