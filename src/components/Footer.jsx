import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import SparkleText from "./SparkleText";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center md:items-start p-6 md:p-10 bg-[linear-gradient(233deg,#fbe9f7,#efebfa)] text-gray-700 relative rounded-t-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-[#f3e7f5]/20 z-[-1]"></div>

      <div className="flex flex-col gap-2 w-full text-center md:text-left">
        <SparkleText className="text-2xl font-semibold" fontSize="1.6rem">
        Neha Datha Pradeep
        </SparkleText>
        <p>Crafting delightful and functional digital experiences.</p>
        <div className="flex justify-center md:justify-start gap-4 mt-2 text-[#f3e7f5] text-xl">
          <a
            href="https://www.linkedin.com/in/neha-datha-pradeep/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://dribbble.com/nehaspradeep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </a>
          <a
            href="https://www.behance.net/nehadathap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBehance />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-2">2025 © All Rights Reserved</p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 p-6  rounded-lg text-center md:text-left">
        
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-900">Contact</p>
          <a
            href="mailto:nehadathapradeep@gmail.com"
            className="text-blue-600 hover:underline"
          >
            nehadathapradeep@gmail.com
          </a>
          <a
            href="https://nehadathapradeep.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
