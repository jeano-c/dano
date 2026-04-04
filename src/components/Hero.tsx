import dano from "../assets/imgs/aaa-1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f8f9fa] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-28 lg:py-40 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 md:gap-12 lg:gap-20">
        <div className="flex-[1.5] flex justify-center items-start flex-col">
          <div className="inline-block -rotate-2 transform mb-4 sm:mb-6">
            <div className="bg-[#FFD709] border-[2px] sm:border-[3px] border-black px-3 sm:px-6 py-1 sm:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-space text-[#5B4B00] font-bold text-xs sm:text-lg md:text-xl tracking-wide uppercase">
                Mission: Critical Code
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-epilogue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2F2F] italic uppercase tracking-tighter">
              Jeano <span className="font-bold text-[#B7004B]">Cabanjen</span>
            </h1>
            <h1 className="font-epilogue text-lg sm:text-xl md:text-3xl font-bold text-[#2D2F2F] italic uppercase tracking-tighter mt-2 sm:mt-4">
              A Full Stack Developer
            </h1>
          </div>

          <div className="border-l-4 border-[#B7004B] mt-4 sm:mt-6 pl-3 sm:pl-4 max-w-lg">
            <p className="font-inter font-semibold text-sm sm:text-base md:text-lg text-[#2D2F2F] tracking-wide leading-relaxed">
              I am a full-stack developer with a heavy focus on backend
              architecture. I build sleek, efficient web applications that solve
              complex, real-world problems.
            </p>
          </div>
          <a
            href="/#projects"
            className="bg-pink-700 mt-4 sm:mt-6 text-white border-3 sm:border-4 border-black font-epilogue font-black uppercase text-xs sm:text-lg px-4 sm:px-8 py-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] sm:hover:translate-x-[2px] hover:translate-y-[1px] sm:hover:translate-y-[2px] transition-all cursor-pointer"
          >
            View Projects
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
            <div className="absolute top-0 left-0 w-full h-full bg-[#FFD709] border-[2px] sm:border-[3px] border-black -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white border-[2px] sm:border-[3px] border-black rotate-2 p-2 sm:p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10">
              <div className="w-full h-full overflow-hidden border-[2px] sm:border-[3px] border-black bg-gray-200">
                <img
                  src={dano}
                  alt="Jeano Cabanjen"
                  className="w-full h-full object-cover antialiased"
                />
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-[#73D2FA] border-[2px] sm:border-[3px] border-black px-2 sm:px-4 py-1 sm:py-2 -rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                <p className="font-bold text-black text-xs sm:text-sm md:text-base tracking-widest uppercase">
                  Est. 1994
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
