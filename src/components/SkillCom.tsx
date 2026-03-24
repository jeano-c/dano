import type { ReactNode } from "react";

export interface Skill {
  name: string;
  subtitle: string;
  icon: ReactNode;
  bg: string;
  iconBg: string;
  rotate: string;
}

interface SkillComProps {
  title: string;
  skills: Skill[];
}

export default function SkillCom({ title, skills }: SkillComProps) {
  return (
    <div className="mb-10 sm:mb-16 md:mb-24">
      <div className="w-full flex justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="relative group inline-block cursor-default">
          <div className="absolute inset-0 bg-black translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:translate-y-2 sm:group-hover:translate-y-3 transition-transform duration-300"></div>

          <div className="relative bg-white border-2 sm:border-[3px] border-black px-4 sm:px-8 py-2 sm:py-3 -rotate-2 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:rotate-0 transition-all duration-300 flex items-center gap-2 sm:gap-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FFD709] border-[1.5px] sm:border-2 border-black"></div>

            <h3 className="font-epilogue text-base sm:text-xl md:text-2xl lg:text-3xl font-black uppercase italic tracking-widest text-black">
              {title}
            </h3>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#73D2FA] border-[1.5px] sm:border-2 border-black"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} ${skill.rotate} border-[2px] sm:border-[3px] border-black p-3 sm:p-5 md:p-8 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group`}
          >
            <div
              className={`${skill.iconBg} border-[2px] sm:border-[3px] border-black rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex justify-center items-center text-xl sm:text-2xl md:text-4xl text-black mb-2 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>


            <h4 className="font-epilogue font-black text-xs sm:text-base md:text-xl lg:text-2xl text-black uppercase tracking-wider mb-1 sm:mb-2 text-center">
              {skill.name}
            </h4>
            <p className="font-space font-bold text-[8px] sm:text-[10px] md:text-xs text-[#757777] uppercase tracking-widest text-center">
              {skill.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
