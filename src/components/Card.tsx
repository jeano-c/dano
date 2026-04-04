import { FaGithub, FaGlobe, FaItchIo } from "react-icons/fa6";

export interface Tag {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  logName: string;
  headerColor: string;
  title: string;
  description: string;
  tags: Tag[];
  btnColor: string;
  image?: string;
  video?: string;
  link?: string;
  linkText?: string;
  linkType?: "github" | "website" | "itch" | "none";
}

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="bg-white border-2 sm:border-[3px] border-black flex flex-col w-full h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Mock OS Window Header */}
      <div
        className={`flex justify-between items-center border-b-2 sm:border-b-[3px] border-black px-3 sm:px-4 py-1.5 sm:py-2 ${project.headerColor}`}
      >
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF3B30] border-[1.5px] sm:border-2 border-black"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFCC00] border-[1.5px] sm:border-2 border-black"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#34C759] border-[1.5px] sm:border-2 border-black"></div>
        </div>
        <span className="min-w-0 flex-1 truncate text-right font-space font-bold text-[10px] sm:text-xs tracking-widest uppercase text-black">
          {project.logName}
        </span>
      </div>

      <div className="flex flex-col flex-1">
        <div className="w-full h-40 sm:h-56 md:h-64 border-b-2 sm:border-b-[3px] border-black overflow-hidden relative">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <div className="mt-1 sm:mt-2 flex flex-col flex-1 px-2.5 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
          <h3 className="font-epilogue font-black text-base sm:text-2xl md:text-3xl uppercase tracking-tight leading-tight break-words text-black mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="font-inter text-gray-600 text-xs sm:text-base font-medium leading-relaxed mb-3 sm:mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`${tag.color} border-[1.5px] sm:border-2 border-black font-space text-[8px] sm:text-[10px] md:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 uppercase tracking-widest shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            className={`mt-auto flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer w-full border-2 sm:border-[3px] border-black py-2 sm:py-3 md:py-4 font-space font-bold text-white uppercase tracking-widest text-xs sm:text-sm md:text-base ${project.btnColor} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200`}
          >
            {project.linkType === "github" && (
              <FaGithub className="text-base sm:text-lg" />
            )}
            {project.linkType === "website" && (
              <FaGlobe className="text-base sm:text-lg" />
            )}
            {project.linkType === "itch" && (
              <FaItchIo className="text-lg sm:text-xl" />
            )}
            {project.linkText || "Open File"}
          </button>
        </div>
      </div>
    </div>
  );
}
