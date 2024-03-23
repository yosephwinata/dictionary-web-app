import useSyncDarkMode from "../hooks/useSyncDarkMode";
import useBoundStore from "../useBoundStore";

const ToggleSwitch = () => {
  const toggleDarkMode = useBoundStore((state) => state.toggleDarkMode);
  useSyncDarkMode();

  return (
    <button
      className="bg-gray-1 dark:bg-purple h-[1.25rem] w-[2.5rem] rounded-[10px] px-1 transition-all"
      onClick={toggleDarkMode}
    >
      <span className="ml-0 mr-auto block h-[0.875rem] w-[0.875rem] rounded-full bg-white  dark:ml-auto dark:mr-0"></span>
    </button>
  );
};

export default ToggleSwitch;
