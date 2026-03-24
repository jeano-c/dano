export default function NavBar() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 z-50 sticky top-0 bg-[#f8f9fa]">
      <nav className="bg-white border-[2px] sm:border-[3px] lg:border-[6px] border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_rgba(0,0,0,1)] min-h-12 sm:min-h-14 lg:min-h-20 flex flex-row items-center justify-between px-3 sm:px-4 lg:px-8 py-2 lg:py-3">
        <div className="font-epilogue font-black italic text-base sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter cursor-pointer">
          <span className="bg-black text-white px-1 sm:px-1.5 lg:px-2 py-0.5 lg:py-1 mr-0.5 lg:mr-1">Jeano</span>
          <span className="text-pink-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] lg:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Cabanjen
          </span>
        </div>

        {/* Navigation links - hidden until lg */}
        <div className="hidden lg:flex flex-row justify-center gap-8">
          {navigation.map((item, index) => (
            <a
              href={item.href}
              className="font-epilogue font-black uppercase text-lg text-black border-b-4 border-transparent hover:text-pink-600 hover:border-pink-600 transition-colors pb-1"
              key={index}
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="/resumejeanocabanjen.pdf"
          download="Jeano_Cabanjen_Resume.pdf"
          className="bg-pink-700 text-white border-2 sm:border-3 lg:border-4 border-black font-epilogue font-black uppercase text-[10px] sm:text-xs lg:text-lg px-3 sm:px-4 lg:px-8 py-1 sm:py-1.5 lg:py-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] lg:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] lg:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] lg:hover:translate-x-[2px] hover:translate-y-[1px] lg:hover:translate-y-[2px] transition-all cursor-pointer"
        >
          Download CV
        </a>
      </nav>
    </div>
  );
}
