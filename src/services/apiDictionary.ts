import axiosInstance from "../axios/axiosInstance";

interface Phonetic {
  text: string;
  audio: string;
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface DictionaryResponse {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
}

export const getDictionary = async (
  keyword: string,
): Promise<DictionaryResponse[]> => {
  try {
    const response = await axiosInstance.get<DictionaryResponse[]>(
      `/entries/en/${keyword}`,
    );
    // console.log("response", response); // Uncomment for debugging
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("No Definitions Found");
  }
};
