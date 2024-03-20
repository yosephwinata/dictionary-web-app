import IconPlay from "../../svg/IconPlay";
import { Phonetic } from "../../types/types";
import useAudio from "../../hooks/useAudio";

interface PronunciationProps {
  word: string;
  phonetics: Phonetic[];
}

const Pronunciation = ({ word, phonetics }: PronunciationProps) => {
  const choosePhonetic = (phonetics: Phonetic[]) => {
    // Choose a phonetic that contains an audio.
    const phonetic = phonetics.find((phonetic) => phonetic.audio !== "");
    // If not found, return the last item in the array
    if (!phonetic) return phonetics.pop();
    return phonetic;
  };

  const chosenPhonetic = choosePhonetic(phonetics);
  const audioUrl = chosenPhonetic?.audio || "";

  const [playing, toggle] = useAudio(audioUrl);

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-black-3 mb-[0.5rem] text-[2rem] font-bold">{word}</p>
        <p className="text-purple text-[1.125rem] font-normal">
          {chosenPhonetic?.text}
        </p>
      </div>
      <button onClick={toggle} disabled={playing}>
        <IconPlay width="3rem" height="3rem" />
      </button>
    </div>
  );
};

export default Pronunciation;
