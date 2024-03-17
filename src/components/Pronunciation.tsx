import IconPlay from "../svg/IconPlay";

const Pronunciation = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-black-3 mb-[0.5rem] text-[2rem] font-bold">
          Keyboard
        </p>
        <p className="text-purple text-[1.125rem] font-normal">/ˈkiːbɔːd/</p>
      </div>
      <button>
        <IconPlay width="3rem" height="3rem" />
      </button>
    </div>
  );
};

export default Pronunciation;
