import { useState } from "react";
import {
  fontFamilyStyles,
  getFontFamilyText,
} from "../features/fontFamily/utils";
import IconArrowDown from "../svg/IconArrowDown";
import IconMoon from "../svg/IconMoon";
import Logo from "../svg/Logo";
import ToggleSwitch from "../ui/ToggleSwitch";
import useBoundStore from "../useBoundStore";
import { FontFamily } from "../features/fontFamily/types";
import Overlay from "../ui/Overlay";

const Header = () => {
  const [isFontFamilyPopoverOpen, setIsFontFamilyPopoverOpen] = useState(false);

  const toggleFontFamilyPopover = () => {
    setIsFontFamilyPopoverOpen((prevState) => !prevState);
  };

  return (
    <header className="mb-6 flex items-center md:mb-[3.25rem]">
      <Logo />
      <div className="relative ml-auto">
        <FontSelector onSelectorClick={toggleFontFamilyPopover} />
        <FontFamilyPopover
          isOpen={isFontFamilyPopoverOpen}
          togglePopover={toggleFontFamilyPopover}
        />
      </div>
      <VerticalLine />
      <div className="ml-5 md:ml-6">
        <ToggleSwitch />
      </div>
      <div className="ml-3 md:ml-5">
        <IconMoon />
      </div>
    </header>
  );
};

interface FontSelectorProps {
  onSelectorClick: () => void;
}

const FontSelector = ({ onSelectorClick }: FontSelectorProps) => {
  const fontFamily = useBoundStore((state) => state.fontFamily);
  const fontFamilyText = getFontFamilyText(fontFamily);

  return (
    <button className="flex items-center gap-4" onClick={onSelectorClick}>
      <span className="text-black-2 text-[0.875rem] font-bold md:text-[1.125rem] dark:text-white">
        {fontFamilyText}
      </span>
      <IconArrowDown />
    </button>
  );
};

interface FontFamilyPopover {
  isOpen: boolean;
  togglePopover: () => void;
}

const FontFamilyPopover = ({ isOpen, togglePopover }: FontFamilyPopover) => {
  const updateFontFamily = useBoundStore((state) => state.updateFontFamily);

  const handleSelection = (choice: FontFamily) => {
    updateFontFamily(choice);
    togglePopover();
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay
        isOpen={isOpen}
        onOverlayClick={togglePopover}
        zIndex="z-10"
        bgColor="bg-black-3"
        opacity="opacity-0"
      />
      <div className="text-black-3 box-shadow-black dark:box-shadow-purple dark:bg-black-2 absolute right-0 z-20 flex w-32 translate-y-4 flex-col gap-2 rounded-lg bg-white p-5 text-[0.875rem] font-bold md:w-44 md:gap-3 md:p-6 md:text-[1.125rem] dark:text-white">
        <p
          className="hover:text-purple cursor-pointer"
          style={fontFamilyStyles["SANS_SERIF"]}
          onClick={() => handleSelection("SANS_SERIF")}
        >
          {getFontFamilyText("SANS_SERIF")}
        </p>
        <p
          className="hover:text-purple cursor-pointer"
          style={fontFamilyStyles["SERIF"]}
          onClick={() => handleSelection("SERIF")}
        >
          {getFontFamilyText("SERIF")}
        </p>
        <p
          className="hover:text-purple cursor-pointer"
          style={fontFamilyStyles["MONO"]}
          onClick={() => handleSelection("MONO")}
        >
          {getFontFamilyText("MONO")}
        </p>
      </div>
    </>
  );
};

const VerticalLine = () => {
  return (
    <div className="bg-gray-2 ml-[1.1625rem] h-8 w-[0.0625rem] md:ml-[1.625rem] dark:bg-white"></div>
  );
};

export default Header;
