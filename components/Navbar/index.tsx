import Link from "next/link";
import ThemeIcon from "./ThemeIcon";
import { Twirl as Hamburger } from "hamburger-react";
import { navbarItems } from "../../constants/navbarItems";
import MenuModal from "./MenuModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed inset-x-0 mx-24 text-sm top-4 drop-shadow-lg sm:max-w-md sm:mx-auto rounded-2xl bg-neutral text-neutral-content">
      <div className="flex items-center justify-between">
        <div className="ml-0.5 btn btn-ghost">
          <Link href="/">
            <h1 className="text-base normal-case mono">yokeyeong</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="hidden space-x-6 sm:flex">
            {navbarItems.map((item, id) => (
              <li
                key={id}
                className="hover:underline hover:text-primary underline-offset-8"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <ThemeIcon />
          <div className="flex items-center justify-center w-12 h-12 m-1 rounded-xl sm:hidden hover:text-primary hover:bg-primary/20">
            <Hamburger
              size={20}
              rounded
              toggled={showModal}
              toggle={setShowModal}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <MenuModal setShowModal={setShowModal} />}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
