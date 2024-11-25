export default function Page() {
  return (
    <div className="h-screen w-full custom-gradient">
      <div className="fixed w-[calc(100vw-24px)] mt-[104px] mx-3 lg:mx-5 h-[calc(100vh-116px)] lg:h-[calc(100vh-140px)] lg:w-[calc(100vw-40px)] lg:mt-[120px] bg-[#b6b6b621] z-50 custom-shadow rounded-md">
        <div className="flex justify-center items-center h-full">
          <h1 className="font-aventine text-4xl text-center">
            Hello, Next.js!
          </h1>
        </div>
      </div>
    </div>
  );
}
