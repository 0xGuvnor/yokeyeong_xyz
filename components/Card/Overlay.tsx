import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Overlay = ({ open, setOpen }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onClick={() => setOpen((prev) => !prev)}
          className="fixed top-0 left-0 z-40 w-screen h-screen cursor-pointer backdrop-blur-sm"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
export default Overlay;
