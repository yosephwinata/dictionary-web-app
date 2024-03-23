import { useEffect } from "react";
import useBoundStore from "../useBoundStore";

const useSyncDarkMode = () => {
  const isDarkMode = useBoundStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Use the code below for future projects where you want to implement 3 choices in a dropdown: light, dark, system:
  // if (
  //   theme === "dark" ||
  //   (theme === "system" &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }
};

export default useSyncDarkMode;
