import Card, { type Project } from "./Card";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      logName: "CASE_STUDY_001.LOG",
      headerColor: "bg-[#FFD709]",
      title: "Form Builder",
      description: "A drag and drop form builder with AI integration.",
      tags: [
        { name: "React Vite", color: "bg-[#A2DFFF]" },
        { name: "NestJs", color: "bg-[#FF80A6]" },
        { name: "RestApis", color: "bg-[#FFD709]" },
        { name: "Turso", color: "bg-white" },
      ],
      btnColor: "bg-[#005B70]",
    },
    {
      id: 2,
      logName: "CASE_STUDY_002.LOG",
      headerColor: "bg-[#73D2FA]",
      title: "Ecompare",
      description:
        "A price comparison Website for e-commerce products with Ai Recomendation.",
      tags: [
        { name: "NextJs", color: "bg-[#FFD709]" },
        { name: "PostgreSQL", color: "bg-[#A2DFFF]" },
        { name: "Puppeteer ", color: "bg-white" },
      ],
      btnColor: "bg-[#B7004B]",
    },
    {
      id: 3,
      logName: "CASE_STUDY_003.LOG",
      headerColor: "bg-[#FFB7B7]",
      title: "Attendance System",
      description:
        "An app made with React Native Expo and Appwrite backend; attendance system for students utilizing QR codes and real-time updates.",
      tags: [
        { name: "React Native", color: "bg-[#A2DFFF]" },
        { name: "Appwrite", color: "bg-[#FFD709]" },
        { name: "TypeScript", color: "bg-white" },
      ],
      btnColor: "bg-[#005B70]",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 bg-[#f8f9fa]">
      {/* --- NEW HEADER DESIGN STARTS HERE --- */}
      <div className="w-full flex flex-col items-center mb-16 md:mb-24">
        {/* Little folder tab detail */}
        <div className="bg-[#FFB7B7] border-[3px] border-black border-b-0 px-6 py-1 -mb-[3px] z-10 font-space font-bold text-xs uppercase tracking-widest text-black">
          Classified Files
        </div>

        {/* Main Header Box */}
        <div className="relative group inline-block cursor-default">
          {/* Offset Shadow */}
          <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

          {/* Main Container */}
          <div className="relative bg-[#FFD709] border-[3px] border-black px-6 py-4 md:px-10 md:py-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300 flex items-center gap-4 md:gap-6">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>

            <h2 className="font-epilogue text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-widest text-black">
              Top Secret
            </h2>

            <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="mt-8 font-space font-bold text-xs md:text-sm text-[#757777] uppercase tracking-widest text-center max-w-lg">
          Declassified records of recent development operations and technical
          case studies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
