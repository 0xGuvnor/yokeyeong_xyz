import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface Props {
  sourceCode:
    | `https://github.com/0xGuvnor/${string}`
    | {
        frontend: `https://github.com/0xGuvnor/${string}`;
        backend: `https://github.com/0xGuvnor/${string}`;
      };
}

const SourceCodeLink = ({ sourceCode }: Props) => {
  const [open, setOpen] = useState(false);

  return typeof sourceCode === "string" ? (
    <div className="flex flex-col group">
      <a
        href={sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        Source Code
      </a>
      <div className="h-[1.5px] bg-base-content scale-0 group-hover:bg-primary group-hover:scale-100 origin-left transition duration-500 ease-in-out rounded-full"></div>
    </div>
  ) : (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <div className="flex items-center cursor-pointer">
        <p className="mr-1 text-primary">Source Code</p>
        <motion.div
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <IoIosArrowUp className="w-4 h-4 text-primary" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute flex space-x-2 sm:space-x-3"
          >
            <div className="flex flex-col group">
              <a
                href={sourceCode.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Frontend
              </a>
              <div className="h-[1.5px] bg-base-content scale-0 group-hover:bg-primary group-hover:scale-100 origin-left transition duration-500 ease-in-out rounded-full"></div>
            </div>

            <div className="text-secondary">|</div>

            <div className="flex flex-col group">
              <a
                href={sourceCode.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Backend
              </a>
              <div className="h-[1.5px] bg-base-content scale-0 group-hover:bg-primary group-hover:scale-100 origin-left transition duration-500 ease-in-out rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SourceCodeLink;
