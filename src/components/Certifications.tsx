import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import reactnative from "../../src/assets/certificates/reactnative.png";
import react_test_dom from "../../src/assets/certificates/react_test_dom.png";
import node from "../../src/assets/certificates/node.png";

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  imagePreview: string;
  pdfLink: string;
  accentColor: string;
  logName: string;
  classification: string;
  skills: { name: string; color: string }[];
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "React Native, v3",
      issuer: "Frontend Masters",
      imagePreview: reactnative,
      pdfLink:
        "https://static.frontendmasters.com/ud/c/4973e208eb/YHzGPPlJYC/react-native-v3-frontendmasters.pdf",
      accentColor: "bg-[#FFD709]",
      logName: "CASE_001",
      classification: "CONFIDENTIAL",
      skills: [
        { name: "React Native", color: "bg-[#73D2FA]" },
        { name: "Expo", color: "bg-white" },
      ],
    },
    {
      id: 2,
      title: "React Certificate",
      issuer: "TestDome",
      imagePreview: react_test_dom,
      pdfLink:
        "https://www.testdome.com/certificates/31ef4efa67364fe389700a0c8f072223",
      accentColor: "bg-[#FF80A6]",
      logName: "CASE_002",
      classification: "VERIFIED",
      skills: [
        { name: "React", color: "bg-[#73D2FA]" },
        { name: "JavaScript", color: "bg-[#FFD709]" },
      ],
    },
    {
      id: 3,
      title: "Node JS",
      issuer: "frontendmasters",
      imagePreview: node,
      pdfLink:
        "https://static.frontendmasters.com/ud/c/4973e208eb/xdzGqkzYQB/api-design-nodejs-v5-frontendmasters.pdf",
      accentColor: "bg-[#BBF7D0]",
      logName: "CASE_002",
      classification: "VERIFIED",
      skills: [
        { name: "REST API", color: "bg-[#93C5FD]" }, // light blue
        { name: "SECURITY", color: "bg-[#86EFAC]" }, // light green
        { name: "TESTING", color: "bg-[#C4B5FD]" }, // light purple
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
  };

  return (
    <section
      id="certifications"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-[#f8f9fa] min-h-screen"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center mb-16 md:mb-24 z-10 relative">
          <div className="bg-[#FF80A6] border-4 border-black border-b-0 px-6 sm:px-8 py-2 -mb-1 z-10 font-space font-black text-sm sm:text-base uppercase tracking-widest text-black shadow-[4px_0_0_black]">
            File Drawer // 02
          </div>
          <div className="relative group inline-block cursor-default w-[90%] sm:w-auto max-w-full">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
            <div className="relative bg-[#FFD709] border-4 border-black px-4 sm:px-10 py-3 sm:py-4 transition-transform duration-300 flex items-center justify-center gap-3 sm:gap-4 w-full">
              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-black rounded-full animate-pulse shrink-0"></div>
              <h2 className="font-epilogue text-[26px] sm:text-5xl md:text-6xl font-black uppercase italic tracking-widest text-black text-center leading-[1.1] break-words">
                Verified Records
              </h2>
              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-black rounded-full animate-pulse shrink-0"></div>
            </div>
          </div>
          <p className="mt-8 font-space font-bold text-sm sm:text-base text-[#2D2F2F] uppercase tracking-widest text-center max-w-xl px-4">
            Security-cleared credentials and certificates.
          </p>
        </div>

        {/* SIMPLE FOLDER GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-stretch"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="flex flex-col relative w-full h-full"
            >
              {/* FOLDER TAB (Top Right) */}
              <div className="self-end px-6 sm:px-8 py-2 sm:py-3 border-4 border-black border-b-0 rounded-t-xl bg-[#FFFDF2] relative z-20 -mb-[4px] mr-6 sm:mr-10 flex items-center gap-3">
                <div
                  className={`w-3 h-3 border-2 border-black ${cert.accentColor}`}
                ></div>
                <span className="font-space font-black text-xs sm:text-sm uppercase tracking-widest text-black">
                  {cert.logName}
                </span>
              </div>

              {/* FOLDER BODY (Fully visible content) */}
              <div className="flex-1 bg-[#FFFDF2] border-4 border-black p-6 sm:p-8 flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,1)] relative z-10 rounded-b-xl rounded-tl-xl rounded-tr-sm">
                {/* Header Row */}
                <div className="flex justify-between items-start border-b-4 border-black pb-4 mb-6 gap-4">
                  <div className="flex flex-col">
                    <span className="font-space text-[10px] sm:text-xs font-extrabold text-[#757777] uppercase tracking-widest mb-1">
                      Certificate
                    </span>
                    <span className="font-epilogue text-2xl sm:text-3xl font-black text-black uppercase leading-tight pr-4">
                      {cert.title}
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right shrink-0">
                    <span className="font-space text-[10px] sm:text-xs font-extrabold text-[#757777] uppercase tracking-widest mb-1">
                      Issuer
                    </span>
                    <span className="font-space text-xs sm:text-sm font-black text-[#B7004B] uppercase leading-tight">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Certificate Image Preview */}
                <div className="w-full aspect-[16/10] border-4 border-black overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,1)] relative bg-white mb-6">
                  <img
                    src={cert.imagePreview}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`${skill.color} border-2 border-black font-space text-[10px] sm:text-xs font-black px-2 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)] text-[#2D2F2F]`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>

                {/* Action Button */}
                <a
                  href={cert.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full border-4 border-black py-4 font-space font-black uppercase tracking-widest text-xs sm:text-sm text-[#2D2F2F] shadow-[4px_4px_0px_rgba(0,0,0,1)] ${cert.accentColor} hover:bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-all duration-150`}
                >
                  Show credential
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
