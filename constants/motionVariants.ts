import { Variants } from "framer-motion";

export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -75,
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 24,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  close: {
    opacity: 0,
    scale: 0,
    y: -75,
    transition: { type: "spring" },
  },
};

export const modalItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: 20,
  },
};

export const themeIconVariants: Variants = {
  hidden: { opacity: 0, rotate: 180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: {
    opacity: 0,
    rotate: -180,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};
