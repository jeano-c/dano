import { BiLogoTypescript } from "react-icons/bi";
import {
  TbBrandNodejs,
  TbBrandCSharp,
  TbBrandReact,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillCom from "./SkillCom";

export default function TechStack() {
  const skilsBackend = [
    {
      name: "Typescript",
      subtitle: "Type Safety",
      icon: <BiLogoTypescript />,
      bg: "bg-white",
      iconBg: "bg-[#FF80A6]",
      rotate: "-rotate-2",
    },
    {
      name: "NodeJS",
      subtitle: "Runtime Power",
      icon: <TbBrandNodejs />,
      bg: "bg-[#FFD709]",
      iconBg: "bg-white",
      rotate: "rotate-2",
    },
    {
      name: "NestJS",
      subtitle: "Architecture",
      icon: <SiNestjs />,
      bg: "bg-[#73D2FA]",
      iconBg: "bg-[#C2003B]",
      rotate: "-rotate-1",
    },
    {
      name: "C#",
      subtitle: "Enterprise King",
      icon: <TbBrandCSharp />,
      bg: "bg-white",
      iconBg: "bg-[#FFD709]",
      rotate: "rotate-2",
    },
  ];

  const skilsFrontend = [
    {
      name: "React",
      subtitle: "UI Master",
      icon: <TbBrandReact />,
      bg: "bg-[#73D2FA]",
      iconBg: "bg-white",
      rotate: "rotate-1",
    },
    {
      name: "React Native",
      subtitle: "Mobile Ready",
      icon: <TbBrandReactNative />,
      bg: "bg-white",
      iconBg: "bg-[#FF80A6]",
      rotate: "-rotate-2",
    },
    {
      name: "Tailwind",
      subtitle: "Style Genius",
      icon: <RiTailwindCssFill />,
      bg: "bg-[#FFD709]",
      iconBg: "bg-white",
      rotate: "rotate-2",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-20 bg-[#f8f9fa]" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16 w-full">
          <h2 className="text-5xl lg:text-6xl font-epilogue font-black uppercase italic tracking-tighter text-[#2D2F2F] whitespace-nowrap">
            The Stack
          </h2>
          <div className="flex-1 h-3 lg:h-4 bg-black"></div>
        </div>
        <SkillCom title="Backend Core" skills={skilsBackend} />
        <SkillCom title="Frontend & Mobile" skills={skilsFrontend} />
      </div>
    </section>
  );
}
