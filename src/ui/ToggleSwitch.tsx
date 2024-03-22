import useBoundStore from "../useBoundStore";

const ToggleSwitch = () => {
  const toggleDarkMode = useBoundStore((state) => state.toggleDarkMode);

  return (
    <button
      className="bg-gray-1 h-[1.25rem] w-[2.5rem] rounded-[10px] px-1"
      onClick={toggleDarkMode}
    >
      <span className="ml-auto block h-[0.875rem] w-[0.875rem] rounded-full bg-white"></span>
    </button>
  );
};

export default ToggleSwitch;
