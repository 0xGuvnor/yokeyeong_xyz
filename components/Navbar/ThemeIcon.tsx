import { MdOutlineWbSunny } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import useIsMounted from "../../hooks/useIsMounted";
import { AnimatePresence, motion } from "framer-motion";
import { themeIconVariants } from "../../constants/motionVariants";
import { useEffect } from "react";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const handleThemeChange = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    // Sets the theme variable for first time visitors
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  }, []);

  if (!mounted) {
    // Only render the UI when component is mounted
    // to prevent hydration errors
    return null;
  }

  return (
    <div onClick={handleThemeChange} className="p-0 sm:p-3 btn btn-ghost">
      <AnimatePresence initial={false} mode="popLayout">
        {theme !== "dark" ? (
          <motion.div
            key={theme}
            variants={themeIconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MdOutlineWbSunny className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key={theme}
            variants={themeIconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <HiOutlineMoon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ThemeIcon;
