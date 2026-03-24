import { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Stack", href: "#stack", id: "stack" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "stack", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find which section we're currently in
      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 z-50 sticky top-0">
      <nav className="bg-white border-[2px] sm:border-[3px] md:border-[6px] border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] min-h-12 sm:min-h-14 md:min-h-20 flex flex-row items-center justify-between px-3 sm:px-4 md:px-8 py-2 md:py-3">
        <div className="font-epilogue font-black italic text-base sm:text-xl md:text-3xl uppercase tracking-tighter cursor-pointer">
          <span className="bg-black text-white px-1 sm:px-2 py-0.5 sm:py-1 mr-0.5 sm:mr-1">
            Jeano
          </span>
          <span className="text-pink-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Cabanjen
          </span>
        </div>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden md:flex flex-row justify-center gap-6 lg:gap-8">
          {navigation.map((item, index) => (
            <a
              href={item.href}
              className={`font-epilogue font-black uppercase text-sm lg:text-lg border-b-4 transition-colors pb-1 ${
                activeSection === item.id
                  ? "text-pink-600 border-pink-600"
                  : "text-black border-transparent hover:text-pink-600 hover:border-pink-600"
              }`}
              key={index}
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="/resumejeanocabanjen.pdf"
          download="Jeano_Cabanjen_Resume.pdf"
          className="bg-pink-700 text-white border-2 sm:border-3 md:border-4 border-black font-epilogue font-black uppercase text-[10px] sm:text-xs md:text-lg px-3 sm:px-4 md:px-8 py-1 sm:py-1.5 md:py-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] md:hover:translate-x-[2px] hover:translate-y-[1px] md:hover:translate-y-[2px] transition-all cursor-pointer"
        >
          Download CV
        </a>
      </nav>
    </div>
  );
}
