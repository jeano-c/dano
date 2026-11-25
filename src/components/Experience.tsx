import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export interface ExperienceItem {
  id: number;
  logName: string;
  status: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  headerColor: string;
  summary: string;
  highlights: {
    text: string;
    bulletColor: string;
  }[];
  tags: {
    name: string;
    color: string;
  }[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      logName: "FIELD_LOG_001.EXP",
      status: "ACTIVE DEPLOYMENT",
      isCurrent: true,
      role: "Full Stack Developer Intern",
      company: "Nielsen Group",
      employmentType: "Internship",
      period: "July 2026 – Present",
      headerColor: "bg-[#73D2FA]",
      summary:
        "Building and shipping end-to-end full-stack features across mobile and web platforms—bridging a React Native mobile application and a React web interface backed by Firebase.",
      highlights: [
        {
          text: "Developed cross-platform mobile features using React Native, focusing on responsive layouts, smooth navigation, and reliable user flows.",
          bulletColor: "bg-[#FFD709]",
        },
        {
          text: "Built and maintained companion web interfaces with React to support seamless full-stack operations across mobile and web clients.",
          bulletColor: "bg-[#73D2FA]",
        },
        {
          text: "Integrated Firebase services to power full-stack backend workflows, real-time data synchronization, and cloud-backed application state.",
          bulletColor: "bg-[#FF80A6]",
        },
      ],
      tags: [
        { name: "React Native", color: "bg-[#A2DFFF]" },
        { name: "React Web", color: "bg-[#FFD709]" },
        { name: "Firebase", color: "bg-[#FFCC80]" },
        { name: "Full Stack", color: "bg-[#FF80A6]" },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
  };

  return (
    <section
      id="experience"
      className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-[#f8f9fa]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8 sm:mb-12 md:mb-16 w-full">
          <div className="flex items-center gap-3 sm:gap-6 flex-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-epilogue font-black uppercase italic tracking-tighter text-[#2D2F2F] whitespace-nowrap">
              Experience
            </h2>
            <div className="flex-1 h-2 sm:h-3 lg:h-4 bg-black"></div>
          </div>

          <div className="self-start sm:self-auto bg-[#FFD709] border-2 sm:border-[3px] border-black px-3 sm:px-4 py-1 sm:py-1.5 -rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-space font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-black">
              Field Record // 01
            </span>
          </div>
        </div>

        {/* Experience Timeline / Dossier Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          className="flex flex-col gap-8 sm:gap-12 max-w-5xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              {/* Mock Dossier / Window Top Bar */}
              <div
                className={`flex flex-wrap justify-between items-center gap-2 border-b-2 sm:border-b-[3px] border-black px-3 sm:px-5 py-2 ${exp.headerColor}`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF3B30] border-[1.5px] sm:border-2 border-black"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFCC00] border-[1.5px] sm:border-2 border-black"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#34C759] border-[1.5px] sm:border-2 border-black"></div>
                  </div>
                  <span className="font-space font-black text-[10px] sm:text-xs uppercase tracking-widest text-black">
                    {exp.logName}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] sm:border-2 border-black px-2 sm:px-3 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {exp.isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-[#34C759] border border-black animate-pulse"></span>
                  )}
                  <span className="font-space font-black text-[9px] sm:text-[11px] uppercase tracking-widest text-black">
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 md:p-8 bg-[#FFFDF2]">
                {/* Header Row: Role, Company & Period */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b-2 sm:border-b-[3px] border-black pb-4 sm:pb-6 mb-5 sm:mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#B7004B] text-white border-[1.5px] sm:border-2 border-black px-2.5 py-0.5 font-space font-bold text-[10px] sm:text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <FaBriefcase className="text-[10px] sm:text-xs" />
                        {exp.employmentType}
                      </span>
                    </div>

                    <h3 className="font-epilogue font-black text-xl sm:text-3xl md:text-4xl uppercase italic tracking-tight text-[#2D2F2F] leading-tight">
                      {exp.role}
                    </h3>

                    <p className="font-epilogue font-black text-base sm:text-xl md:text-2xl uppercase tracking-tight text-[#B7004B] mt-1">
                      @ {exp.company}
                    </p>
                  </div>

                  <div className="self-start md:self-center inline-flex items-center gap-2 bg-[#FFD709] border-2 sm:border-[3px] border-black px-3 sm:px-4 py-1.5 sm:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <FaCalendarAlt className="text-black text-xs sm:text-sm" />
                    <span className="font-space font-black text-xs sm:text-sm uppercase tracking-wider text-black">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Mission Summary */}
                <div className="border-l-4 border-[#B7004B] pl-3 sm:pl-4 mb-5 sm:mb-7">
                  <p className="font-inter font-semibold text-xs sm:text-base md:text-lg text-[#2D2F2F] leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6 sm:mb-8">
                  <span className="block font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-widest text-[#757777] mb-3">
                    Key Operations
                  </span>
                  <ul className="flex flex-col gap-3">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 bg-white border-2 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <span
                          className={`mt-1 w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 border-2 border-black ${item.bulletColor}`}
                        ></span>
                        <p className="font-inter text-xs sm:text-sm md:text-base font-medium text-[#2D2F2F] leading-relaxed">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <span className="block font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-widest text-[#757777] mb-2.5">
                    Tech Deployed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${tag.color} border-[1.5px] sm:border-2 border-black font-space text-[10px] sm:text-xs font-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
