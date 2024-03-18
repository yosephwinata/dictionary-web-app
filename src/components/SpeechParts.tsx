import { Definition, Meaning } from "../types/types";

const SpeechParts = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <div>
      {meanings.map((meaning) => (
        <SpeechPart meaning={meaning} />
      ))}
    </div>
  );
};

const SpeechPart = ({ meaning }: { meaning: Meaning }) => {
  const { partOfSpeech, definitions } = meaning;

  return (
    <div>
      <SpeechPartTitle partOfSpeech={partOfSpeech} />
      <Meanings definitions={definitions} />
      <Synonyms />
    </div>
  );
};

const SpeechPartTitle = ({ partOfSpeech }: { partOfSpeech: string }) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-black-3 text-[1.125rem] font-bold italic">
        {partOfSpeech}
      </span>
      <div className="bg-gray-2 h-[0.0625rem] w-full"></div>
    </div>
  );
};

const Meanings = ({ definitions }: { definitions: Definition[] }) => {
  return (
    <div className="mb-6">
      <p className="text-gray-1 mb-[1rem] text-[1.0625rem] font-normal">
        Meaning
      </p>
      <ul className="list-disc-custom-color flex flex-col gap-3 pl-5">
        {definitions.map((definition) => {
          return (
            <li className="text-black-3 list-disc text-base font-normal">
              <p>{definition.definition}</p>
            </li>
          );
        })}
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
