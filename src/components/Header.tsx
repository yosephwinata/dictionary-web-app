import IconArrowDown from "../svg/IconArrowDown";
import IconMoon from "../svg/IconMoon";
import Logo from "../svg/Logo";
import ToggleSwitch from "../ui/ToggleSwitch";

const Header = () => {
  return (
    <div className="mb-6 flex items-center">
      <Logo />
      <FontSelector />
      <ToggleSwitch />
      <div className="ml-3">
        <IconMoon />
      </div>
    </div>
  );
};

const FontSelector = () => {
  return (
    <button className="ml-auto flex items-center gap-4">
      <span className="text-black-3 text-[0.875rem] font-bold">Sans Serif</span>
      <IconArrowDown />
    </button>
  );
};

export default Header;
