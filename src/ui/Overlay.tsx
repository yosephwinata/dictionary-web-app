interface OverlayProps {
  isOpen: boolean;
  onOverlayClick: () => void;
  zIndex?: string;
  bgColor?: string;
  opacity?: string;
}

const Overlay = ({
  isOpen,
  onOverlayClick,
  zIndex,
  bgColor,
  opacity,
}: OverlayProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 top-0 h-full w-full ${zIndex} ${bgColor} ${opacity}`}
      onClick={onOverlayClick}
    ></div>
  );
};

export default Overlay;
