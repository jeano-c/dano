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
}

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="bg-white border-[3px] border-black flex flex-col w-full h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Mock OS Window Header */}
      <div
        className={`flex justify-between items-center border-b-[3px] border-black px-4 py-2 ${project.headerColor}`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF3B30] border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFCC00] border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-[#34C759] border-2 border-black"></div>
        </div>
        <span className="font-space font-bold text-xs tracking-widest uppercase text-black">
          {project.logName}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="w-full h-48 md:h-64 border-[3px] border-black bg-gray-800 overflow-hidden relative">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-80"
            />
          )}
        </div>

        <div className="mt-2 flex flex-col flex-1">
          <h3 className="font-epilogue font-black text-2xl md:text-3xl uppercase tracking-tight text-black mb-3">
            {project.title}
          </h3>
          <p className="font-inter text-gray-600 font-medium leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`${tag.color} border-2 border-black font-space text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <button
            className={`mt-auto cursor-pointer w-full border-[3px] border-black py-4 font-space font-bold text-white uppercase tracking-widest text-sm md:text-base ${project.btnColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active::translate-y-1 active:shadow-none transition-all duration-200`}
          >
            Open File
          </button>
        </div>
      </div>
    </div>
  );
}
