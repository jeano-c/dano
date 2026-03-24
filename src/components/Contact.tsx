import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/jeano-cabanjen-9a3892362",
      bg: "bg-[#0077B5]",
    },
    {
      name: "Gmail",
      icon: <MdEmail />,
      href: "mailto:cabanjenjeaano@gmail.com",
      bg: "bg-[#EA4335]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/jeano.cabanjen.1/",
      bg: "bg-[#1877F2]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/jeano-c",
      bg: "bg-[#333]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#f8f9fa]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="flex-1 h-2 sm:h-3 lg:h-4 bg-black"></div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-epilogue font-black uppercase italic tracking-tighter text-[#2D2F2F]">
            Contact
          </h2>
          <div className="flex-1 h-2 sm:h-3 lg:h-4 bg-black"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bg} border-[2px] sm:border-[3px] border-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 flex items-center gap-2 sm:gap-3 md:gap-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group`}
            >
              <span className="text-white text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
              <span className="font-epilogue font-black text-white uppercase tracking-wider text-xs sm:text-sm md:text-lg">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 sm:mt-10 md:mt-14 text-center font-space font-bold text-[10px] sm:text-xs md:text-sm text-[#757777] uppercase tracking-widest">
          Let's build something awesome together
        </p>
      </div>
    </section>
  );
}
