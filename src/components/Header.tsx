import {
  fontFamilyStyles,
  getFontFamilyText,
} from "../features/fontFamily/utils";
import IconArrowDown from "../svg/IconArrowDown";
import IconMoon from "../svg/IconMoon";
import Logo from "../svg/Logo";
import ToggleSwitch from "../ui/ToggleSwitch";
import useBoundStore from "../useBoundStore";

const Header = () => {
  return (
    <header className="mb-6 flex items-center">
      <Logo />
      <div className="relative ml-auto">
        <FontSelector />
        <FontSelectionModal />
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
  const fontFamily = useBoundStore((state) => state.fontFamily);
  const fontFamilyText = getFontFamilyText(fontFamily);

  return (
    <button className="flex items-center gap-4">
      <span className="text-black-2 text-[0.875rem] font-bold dark:text-white">
        {fontFamilyText}
      </span>
      <IconArrowDown />
    </button>
  );
};

const FontSelectionModal = () => {
  const updateFontFamily = useBoundStore((state) => state.updateFontFamily);

  return (
    <div className="text-black-3  absolute right-0 z-20 flex w-32 translate-y-4 flex-col gap-2 rounded-lg bg-white p-5 font-bold shadow-2xl">
      <p
        className="hover:text-purple cursor-pointer text-[0.875rem]"
        style={fontFamilyStyles["SANS_SERIF"]}
        onClick={() => updateFontFamily("SANS_SERIF")}
      >
        {getFontFamilyText("SANS_SERIF")}
      </p>
      <p
        className="hover:text-purple cursor-pointer text-[0.875rem]"
        style={fontFamilyStyles["SERIF"]}
        onClick={() => updateFontFamily("SERIF")}
      >
        {getFontFamilyText("SERIF")}
      </p>
      <p
        className="hover:text-purple cursor-pointer text-[0.875rem]"
        style={fontFamilyStyles["MONO"]}
        onClick={() => updateFontFamily("MONO")}
      >
        {getFontFamilyText("MONO")}
      </p>
    </div>
  );
};

const VerticalLine = () => {
  return (
    <div className="bg-gray-2 ml-[1.1625rem] h-8 w-[0.0625rem] dark:bg-white"></div>
  );
};

export default Header;
