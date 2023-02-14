import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { navbarItems } from "../../constants/navbarItems";
import { motion } from "framer-motion";
import {
  modalItemVariants,
  modalVariants,
} from "../../constants/motionVariants";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const MenuModal = ({ setShowModal }: Props) => {
  return (
    <>
      {/* Overlay to close the modal when the backdrop is clicked */}
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 w-screen h-screen -mx-24 -mt-4 -z-10"
      ></div>

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="open"
        exit="close"
        className="absolute inset-x-0 top-16 sm:hidden"
      >
        <ul className="grid grid-cols-1 divide-y bg-neutral/90 divide-neutral-focus text-neutral-content rounded-2xl">
          {navbarItems.map((item, id) => (
            <Link
              key={id}
              href={item.link}
              onClick={() => setShowModal(false)}
              className="hover:bg-neutral-focus last:rounded-b-2xl first:rounded-t-2xl"
            >
              <motion.li variants={modalItemVariants} className="px-5 py-4">
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </>
  );
};
export default MenuModal;
