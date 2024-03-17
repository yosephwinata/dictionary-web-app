const SpeechParts = () => {
  return (
    <div>
      <SpeechPart />
    </div>
  );
};

const SpeechPart = () => {
  return (
    <div>
      <SpeechPartTitle />
      <Meanings />
      <Synonyms />
    </div>
  );
};

const SpeechPartTitle = () => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-black-3 text-[1.125rem] font-bold italic">
        noun
      </span>
      <div className="bg-gray-2 h-[0.0625rem] w-full"></div>
    </div>
  );
};

const Meanings = () => {
  return (
    <div className="mb-6">
      <p className="text-gray-1 mb-[1rem] text-[1.0625rem] font-normal">
        Meaning
      </p>
      <ul className="list-disc-custom-color pl-5">
        <li className="text-black-3 list-disc text-base font-normal">
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
      </ul>
    </div>
  );
};

const Synonyms = () => {
  return (
    <div className="mb-8 flex">
      <span className="text-gray-1 mr-6 text-base font-normal">Synonyms</span>
      <ul>
        <li>
          <a href="#" className="text-purple text-base font-bold">
            electronic keyboard
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SpeechParts;
