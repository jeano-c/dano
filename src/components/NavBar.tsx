export default function NavBar() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full px-6 pt-6 z-50 sticky top-0">
      <nav className="bg-white border-[6px] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] min-h-20 flex flex-row items-center justify-between px-8 py-3">
        <div className="font-epilogue font-black italic text-3xl uppercase tracking-tighter cursor-pointer flex-1">
          <span className="bg-black text-white px-2 py-1 mr-1">Jeano</span>
          <span className="text-pink-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Cabanjen
          </span>
        </div>
        <div className="flex flex-row justify-center gap-8 flex-1">
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

        <div className="flex-1 flex justify-end">
          <a
            href="/cv.pdf"
            className="bg-pink-700 text-white border-4 border-black font-epilogue font-black uppercase text-lg px-8 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </nav>
    </div>
  );
}
