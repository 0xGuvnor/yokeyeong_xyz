import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { projectData } from "../constants/projectData";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="flex flex-wrap items-center justify-center gap-2 mt-44 ">
        <LayoutGroup>
          {projectData.map((project, id) => (
            <ExpandingCard key={id} />
          ))}
        </LayoutGroup>
      </div>
    </Layout>
  );
};
export default About;

const ExpandingCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 z-20 w-screen h-screen backdrop-blur-sm"
        ></div>
      )}
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        style={{ borderRadius: 24 }}
        onClick={() => setOpen(!open)}
        className={`${
          open
            ? "fixed top-20 z-50 w-[90vw] h-[500px] shadow-lg bg-secondary"
            : "w-[450px] h-[450px] bg-primary"
        } p-4 text-primary-content`}
      >
        <motion.h1 layout="position" className="font-black">
          Lorem ipsum dolor sit amet.
        </motion.h1>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              est ducimus aliquid id earum, porro possimus quam officia error
              accusantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              ipsa!
            </p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
