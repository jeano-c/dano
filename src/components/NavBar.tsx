import { motion } from "framer-motion";

export default function NavBar() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 z-50 sticky top-0 bg-[#f8f9fa]"
    >
      <nav className="bg-white border-[2px] sm:border-[3px] lg:border-[6px] border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_rgba(0,0,0,1)] min-h-12 sm:min-h-14 lg:min-h-20 flex flex-row items-center justify-between px-3 sm:px-4 lg:px-8 py-2 lg:py-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-epilogue font-black italic text-[13px] sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter cursor-pointer flex items-center whitespace-nowrap"
        >
          <span className="bg-black text-white px-1 sm:px-1.5 lg:px-2 py-0.5 lg:py-1 mr-1 lg:mr-2">Jeano</span>
          <span className="text-pink-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] lg:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Cabanjen
          </span>
        </motion.div>

        {/* Navigation links - hidden until lg */}
        <div className="hidden lg:flex flex-row justify-center gap-8">
          {navigation.map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              className="font-epilogue font-black uppercase text-lg text-black border-b-4 border-transparent hover:text-pink-600 hover:border-pink-600 transition-colors pb-1"
              key={index}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          whileHover={{
            y: 2,
            x: 2,
            boxShadow: "2px 2px 0px rgba(0,0,0,1)",
          }}
          whileTap={{ scale: 0.95 }}
          href="/Jeano_Cabanjen.pdf"
          download="Jeano_Cabanjen_Resume.pdf"
          className="bg-pink-700 text-white border-2 sm:border-3 lg:border-4 border-black font-epilogue font-black uppercase text-[10px] sm:text-xs lg:text-lg px-3 sm:px-4 lg:px-8 py-1 sm:py-1.5 lg:py-2 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          Download CV
        </motion.a>
      </nav>
    </motion.div>
  );
}
