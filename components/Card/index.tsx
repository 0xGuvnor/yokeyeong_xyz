import { ProjectData } from "../../typings";
import TagList from "./TagList";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import CardPlaceholder from "./CardPlaceholder";
import { AiOutlineClose } from "react-icons/ai";
import CardImage from "./CardImage";
import { useRouter } from "next/router";
import SourceCodeLink from "./SourceCodeLink";

const Card = ({
  id,
  title,
  tags,
  image,
  description,
  sourceCode,
  deployment,
}: ProjectData) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (!open) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      // Disables background scrolling when the card is opened
      document.body.style.overflow = open ? "hidden" : "auto";
    } else {
      // Enables body scrolling again when user leaves the page with a card opened
      document.body.style.overflow = "auto";
    }
  }, [open, router.pathname]);

  return (
    <>
      <Overlay open={open} setOpen={setOpen} />
      <CardPlaceholder open={open} />

      <motion.li
        layout
        transition={{ layout: { duration: 0.4, type: "spring" } }}
        style={{
          borderRadius: 26,
        }}
        onClick={handleOpen}
        className={`${
          open
            ? "fixed top-[5.5rem] sm:top-20 left-0 right-0 max-h-[88vh] md:max-h-[92vh] w-[80vw] max-w-6xl mx-auto z-40 overflow-y-scroll shadow-2xl bg-base-300"
            : "relative h-[300px] w-[300px] md:h-[380px] md:w-[380px] cursor-pointer bg-neutral sm:bg-neutral/70 hover:bg-neutral z-20"
        } p-4 sm:p-6 hover:shadow-2xl`}
      >
        <CardImage open={open} image={image} alt={id} />
        <motion.div
          layout="position"
          className="relative flex flex-col space-yy-2"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold leading-5 text-white md:leading-6 md:text-xl">
              {title}
            </h1>
            <AiOutlineClose
              onClick={() => setOpen((prev) => !prev)}
              className={`${
                !open && "hidden"
              } p-1 rounded-full cursor-pointer w-7 transition duration-300 ease-in-out h-7 hover:bg-primary/70 text-primary-content`}
            />
          </div>
          <TagList open={open} tags={tags} />
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sm:text-lg mt-[350px] sm:mt-[340px] bg-base-300 h-full z-30 mb-8 sm:mb-6 space-y-8"
          >
            <p className="whitespace-pre">{description}</p>
            <div className="flex space-x-10 font-bold">
              <SourceCodeLink sourceCode={sourceCode} />

              <div className="flex flex-col group">
                <a
                  href={deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-primary"
                >
                  Deployment
                </a>
                <div className="h-[1.5px] bg-base-content scale-0 group-hover:scale-100 group-hover:bg-primary origin-left transition duration-500 ease-in-out rounded-full"></div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.li>
    </>
  );
};
export default Card;
