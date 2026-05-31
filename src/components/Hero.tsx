import { motion } from "framer-motion";
import dano from "../assets/imgs/aaa-1.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -12 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -2,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 2,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 12, delay: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="bg-[#f8f9fa] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-28 lg:py-40 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 md:gap-12 lg:gap-20"
      >
        <div className="flex-[1.5] flex justify-center items-start flex-col">
          <motion.div variants={badgeVariants} className="inline-block transform mb-4 sm:mb-6">
            <div className="bg-[#FFD709] border-[2px] sm:border-[3px] border-black px-3 sm:px-6 py-1 sm:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-space text-[#5B4B00] font-bold text-xs sm:text-lg md:text-xl tracking-wide uppercase">
                Mission: Critical Code
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="font-epilogue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2F2F] italic uppercase tracking-tighter">
              Jeano <span className="font-bold text-[#B7004B]">Cabanjen</span>
            </h1>
            <h1 className="font-epilogue text-lg sm:text-xl md:text-3xl font-bold text-[#2D2F2F] italic uppercase tracking-tighter mt-2 sm:mt-4">
              A Full Stack Developer
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-l-4 border-[#B7004B] mt-4 sm:mt-6 pl-3 sm:pl-4 max-w-lg"
          >
            <p className="font-inter font-semibold text-sm sm:text-base md:text-lg text-[#2D2F2F] tracking-wide leading-relaxed">
              I am a full-stack developer with a heavy focus on backend
              architecture. I build sleek, efficient web applications that solve
              complex, real-world problems.
            </p>
          </motion.div>
          
          <motion.a
            variants={itemVariants}
            whileHover={{
              y: 2,
              x: 2,
              boxShadow: "2px 2px 0px rgba(0,0,0,1)",
            }}
            whileTap={{ scale: 0.95 }}
            href="/#projects"
            className="bg-pink-700 mt-4 sm:mt-6 text-white border-3 sm:border-4 border-black font-epilogue font-black uppercase text-xs sm:text-lg px-4 sm:px-8 py-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all cursor-pointer inline-block"
          >
            View Projects
          </motion.a>
        </div>

        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
            <div className="absolute top-0 left-0 w-full h-full bg-[#FFD709] border-[2px] sm:border-[3px] border-black -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4"></div>
            <motion.div
              variants={profileVariants}
              className="absolute top-0 left-0 w-full h-full bg-white border-[2px] sm:border-[3px] border-black rotate-2 p-2 sm:p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
