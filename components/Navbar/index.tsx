import Link from "next/link";
import ThemeIcon from "./ThemeIcon";
import { Twirl as Hamburger } from "hamburger-react";
import { navbarItems } from "../../constants/navbarItems";
import MenuModal from "./MenuModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.header
      initial={{ width: isMobile ? "10%" : "5%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 2 }}
      className="fixed inset-x-0 z-50 max-w-[16rem] text-sm top-4 drop-shadow-2xl sm:max-w-sm mx-auto rounded-[99px] md:rounded-3xl bg-neutral text-neutral-content"
    >
      <div className="flex items-center justify-between">
        <div className="ml-0.5 btn btn-ghost">
          <Link href="/" scroll={false}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base normal-case mono sm:hidden"
            >
              yokeyeong
            </motion.h1>
            <h1 className="hidden text-base normal-case mono sm:block">yy</h1>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center"
        >
          <ul className="hidden space-x-6 sm:flex">
            {navbarItems.map((item, id) => (
              <li
                key={id}
                className="flex flex-col space-y-0.5 group hover:text-primary"
              >
                <Link href={item.link} scroll={false}>
                  {item.name}
                </Link>
                {router.pathname === item.link ? (
                  <motion.div
                    layoutId="underline"
                    className="h-[1px] rounded-full bg-neutral-content group-hover:bg-primary"
                  ></motion.div>
                ) : (
                  <div className="h-[1px] rounded-full bg-neutral-content scale-0 group-hover:scale-100 origin-left transition ease-in-out duration-300 group-hover:bg-primary"></div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center"
        >
          <ThemeIcon />
          <div className="flex items-center justify-center w-12 h-12 m-0.5 rounded-3xl sm:hidden hover:text-primary hover:bg-primary/20">
            <Hamburger
              size={18}
              rounded
              toggled={showModal}
              toggle={setShowModal}
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && <MenuModal setShowModal={setShowModal} />}
      </AnimatePresence>
    </motion.header>
  );
};
export default Navbar;
