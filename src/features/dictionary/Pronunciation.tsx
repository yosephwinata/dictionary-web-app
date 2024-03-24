import IconPlay from "../../svg/IconPlay";
import { Phonetic } from "../../types/types";
import useAudio from "../../hooks/useAudio";
import useViewportSize from "../../hooks/useViewportSize";

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
  const { isMobile } = useViewportSize();
  const width = isMobile ? "3rem" : "4.75rem";
  const height = isMobile ? "3rem" : "4.75rem";

  return (
    <div className="mb-8 flex items-center justify-between md:mb-10">
      <div>
        <p className="text-black-3 mb-[0.5rem] text-[2rem] font-bold md:mb-[0.1rem] md:text-[4rem] dark:text-white">
          {word}
        </p>
        <p className="text-purple text-[1.125rem] font-normal md:text-[1.5rem]">
          {chosenPhonetic?.text}
        </p>
      </div>
      <button onClick={toggle} disabled={playing}>
        <IconPlay width={width} height={height} />
      </button>
    </div>
  );
};

export default Pronunciation;
