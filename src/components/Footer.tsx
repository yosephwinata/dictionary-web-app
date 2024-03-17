import IconNewWindow from "../svg/IconNewWindow";

const Footer = () => {
  return (
    <footer>
      <p className="text-gray-1 decoration-gray-2 mb-1 text-[0.875rem] font-normal underline decoration-2 underline-offset-2">
        Source
      </p>
      <div className="flex items-center gap-1.5">
        <a
          href="#"
          className="pointer black-3 decoration-gray-1 text-[0.875rem] font-normal underline underline-offset-2"
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <IconNewWindow />
      </div>
    </footer>
  );
};

export default Footer;
