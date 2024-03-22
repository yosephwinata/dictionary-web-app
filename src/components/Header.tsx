import IconArrowDown from "../svg/IconArrowDown";
import IconMoon from "../svg/IconMoon";
import Logo from "../svg/Logo";
import ToggleSwitch from "../ui/ToggleSwitch";
import useBoundStore from "../useBoundStore";

const Header = () => {
  return (
    <header className="mb-6 flex items-center">
      <Logo />
      <div className="ml-auto">
        <FontSelector />
      </div>
      <VerticalLine />
      <div className="ml-5">
        <ToggleSwitch />
      </div>
      <div className="ml-3">
        <IconMoon />
      </div>
    </header>
  );
};

const FontSelector = () => {
  const isDarkMode = useBoundStore((state) => state.isDarkMode);

  return (
    <button className="flex items-center gap-4">
      <span
        className={` text-[0.875rem] font-bold ${isDarkMode ? "text-orange" : "text-black-3"}`}
      >
        Sans Serif
      </span>
      <IconArrowDown />
    </button>
  );
};

const VerticalLine = () => {
  return <div className="bg-gray-2 ml-[1.1625rem] h-8 w-[0.0625rem]"></div>;
};

export default Header;
