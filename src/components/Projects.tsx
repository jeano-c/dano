import Card, { type Project } from "./Card";
import ecompare from "../assets/ss/ecom.png";
import form from "../assets/ss/form.png";
export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      image: form,
      logName: "CASE_STUDY_001.LOG",
      headerColor: "bg-[#FFD709]",
      title: "Form Builder",
      link: "https://www.ispecmn.site/",
      linkText: "website",
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
      linkText: "github",
      link: "https://github.com/jeano-c/rcy",
      description:
        "An app made with React Native Expo and Appwrite backend; attendance system for students utilizing QR codes and real-time updates.",
      tags: [
        { name: "React Native", color: "bg-[#A2DFFF]" },
        { name: "Appwrite", color: "bg-[#FFD709]" },
        { name: "TypeScript", color: "bg-white" },
      ],
      btnColor: "bg-[#005B70]",
    },
    {
      id: 4,
      logName: "CASE_STUDY_004.LOG",
      headerColor: "bg-[#E0F2F1]",
      linkText: "github",
      link: "https://github.com/jeano-c/event_drive",
      title: "Smart POS & Inventory",
      description:
        "A comprehensive POS system built with Django featuring 'Stack Watcher' for intelligent inventory monitoring, Linear Regression for profit forecasting, and AI-generated business summaries.",
      tags: [
        { name: "Django", color: "bg-[#80CBC4]" },
        { name: "Python", color: "bg-[#90CAF9]" },
        { name: "Scikit-Learn", color: "bg-[#FFCC80]" },
        { name: "AI/ML", color: "bg-[#CE93D8]" },
      ],
      btnColor: "bg-[#4DB6AC]",
    },
    {
      id: 5,
      logName: "CASE_STUDY_005.LOG",
      headerColor: "bg-[#FFF4E0]",

      title: "Busog Banyaga",
      description:
        "A Philippine-themed tower defense game featuring custom-designed sprites of iconic vehicles like jeepneys and tricycles, with unique local-inspired defense mechanics.",
      tags: [
        { name: "Unity", color: "bg-[#FFCCBC]" },
        { name: "C#", color: "bg-[#D1C4E9]" },
        { name: "Game Dev", color: "bg-[#C8E6C9]" },
      ],
      btnColor: "bg-[#FFAB91]",
    },
    {
      id: 6,
      logName: "CASE_STUDY_006.LOG",
      headerColor: "bg-[#E3F2FD]",
      link: "https://busogbanyaga.itch.io/the-chore?brid=33smqJMVFpHF-ANMbNdQgA&fbclid=IwY2xjawQ9z79leHRuA2FlbQIxMABicmlkETFldzFhTk1GQTNCdUxpOHhPc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHl9P4lFvW-9XnYYrGoqcHzVhdHUXUbRmIRRaVbOPQ8m6S4sD4DZn8B6lQYi7_aem_s8uqSaj7kq4QhLaZXvGsyw",
      linkText: "itch.io",
      title: "The Chore",
      description:
        "A Unity simulation project where daily house chores and school tasks—from washing dishes to daily scrum meetings—are gamified into a series of interactive minigames.",
      tags: [
        { name: "Unity", color: "bg-[#BBDEFB]" },
        { name: "C#", color: "bg-[#D1C4E9]" },
      ],
      btnColor: "bg-[#90CAF9]", // Balanced Blue
    },
    {
      id: 7,
      logName: "CASE_STUDY_07.LOG",
      headerColor: "bg-[#FCE4EC]", // Very soft pastel pink
      title: "Anime Tracker & Community",
      description:
        "A social anime discovery platform utilizing the Kitsu.io API. Features include personalized watchlists, real-time commenting systems, and a community 'like' interaction for user discussions.",
      tags: [
        { name: "Node.js", color: "bg-[#E8F5E9]" }, // Soft Mint
        { name: "React", color: "bg-[#E1F5FE]" }, // Soft Blue
        { name: "Kitsu API", color: "bg-[#F8BBD0]" }, // Muted Pink
        { name: "Express", color: "bg-[#F5F5F5]" }, // Light Grey
      ],
      btnColor: "bg-[#F06292]", // Balanced Rose (visible on white)
    },
    {
      id: 8,
      logName: "CASE_STUDY_08.LOG",
      headerColor: "bg-[#F1F5F9]", // Very light slate (clean and modern)
      title: "Social Engine API",
      description:
        "A high-performance, backend-only REST API built with C# and ASP.NET Core. It manages the core logic for a social platform, including secure authentication, relational data for followers, and complex feed queries.",
      tags: [
        { name: "C#", color: "bg-[#E1BEE7]" }, // Soft Purple (C# signature)
        { name: "ASP.NET Core", color: "bg-[#BBDEFB]" }, // Light Blue
        { name: "REST API", color: "bg-[#CFD8DC]" }, // Muted Grey
        { name: "Entity Framework", color: "bg-[#DCEDC8]" }, // Pale Mint
      ],
      btnColor: "bg-[#475569]",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-[#f8f9fa]"
    >
      {/* --- NEW HEADER DESIGN STARTS HERE --- */}
      <div className="w-full flex flex-col items-center mb-8 md:mb-24">
        {/* Little folder tab detail */}
        <div className="bg-[#FFB7B7] border-2 sm:border-[3px] border-black border-b-0 px-3 sm:px-6 py-1 -mb-[2px] sm:-mb-[3px] z-10 font-space font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black">
          Classified Files
        </div>

        {/* Main Header Box */}
        <div className="relative group inline-block cursor-default">
          {/* Offset Shadow */}
          <div className="absolute inset-0 bg-black translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:translate-y-2 sm:group-hover:translate-y-3 transition-transform duration-300"></div>

          {/* Main Container */}
          <div className="relative bg-[#FFD709] border-2 sm:border-[3px] border-black px-4 sm:px-6 md:px-10 py-2 sm:py-4 md:py-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300 flex items-center gap-2 md:gap-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>

            <h2 className="font-epilogue text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-widest text-black">
              Top Secret
            </h2>

            <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="mt-4 md:mt-8 font-space font-bold text-[10px] sm:text-xs md:text-sm text-[#757777] uppercase tracking-widest text-center max-w-lg px-4">
          Declassified records of recent development operations and technical
          case studies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
