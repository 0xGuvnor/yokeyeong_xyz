import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-10 mt-10 space-y-4 bg-base-300">
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/yoke-yeong-lam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-primary" />
        </a>
        <a
          href="https://github.com/0xGuvnor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-primary" />
        </a>
      </div>
      <a
        href="mailto:hello@yokeyeong.xyz?Subject=Hello!"
        className="transition-colors duration-300 ease-in-out mono hover:text-primary"
      >
        hello@yokeyeong.xyz
      </a>
    </footer>
  );
};
export default Footer;
