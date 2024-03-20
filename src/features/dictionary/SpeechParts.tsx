import { Definition, Meaning } from "../../types/types";

const SpeechParts = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <div>
      {meanings.map((meaning) => (
        <SpeechPart key={meaning.partOfSpeech} meaning={meaning} />
      ))}
    </div>
  );
};

const SpeechPart = ({ meaning }: { meaning: Meaning }) => {
  const { partOfSpeech, definitions, synonyms } = meaning;

  return (
    <div>
      <SpeechPartTitle partOfSpeech={partOfSpeech} />
      <Meanings definitions={definitions} />
      {synonyms.length > 0 && <Synonyms synonyms={synonyms} />}
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
            <li
              key={definition.definition}
              className="text-black-3 list-disc text-base font-normal"
            >
              <p>{definition.definition}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Synonyms = ({ synonyms }: { synonyms: string[] }) => {
  return (
    <div className="mb-8 flex">
      <span className="text-gray-1 mr-6 text-base font-normal">Synonyms</span>
      <ul className="flex flex-col gap-0">
        {synonyms.map((synonym, index) => {
          return (
            <li key={`${synonym}-${index}`}>
              <a href="#" className="text-purple text-base font-bold">
                {synonym}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpeechParts;
