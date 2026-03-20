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
    <div className="mb-24">
      <div className="w-full flex justify-center mb-16">
        <div className="relative group inline-block cursor-default">
          <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

          <div className="relative bg-white border-[3px] border-black px-8 py-3 -rotate-2 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:rotate-0 transition-all duration-300 flex items-center gap-4">
            <div className="w-3 h-3 bg-[#FFD709] border-2 border-black"></div>

            <h3 className="font-epilogue text-2xl lg:text-3xl font-black uppercase italic tracking-widest text-black">
              {title}
            </h3>
            <div className="w-3 h-3 bg-[#73D2FA] border-2 border-black"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} ${skill.rotate} border-[3px] border-black w-64 p-8 flex flex-col items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group`}
          >
            <div
              className={`${skill.iconBg} border-[3px] border-black rounded-full w-20 h-20 flex justify-center items-center text-4xl text-black mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>


            <h4 className="font-epilogue font-black text-2xl text-black uppercase tracking-wider mb-2 text-center">
              {skill.name}
            </h4>
            <p className="font-space font-bold text-xs text-[#757777] uppercase tracking-widest text-center">
              {skill.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
