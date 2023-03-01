import { motion } from "framer-motion";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { layoutVariants } from "../constants/motionVariants";

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title} - yokeyeong.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        variants={layoutVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};
export default Layout;
