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
};

export default useSyncDarkMode;
