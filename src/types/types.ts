export interface Phonetic {
  text: string;
  audio: string;
}

export interface Definition {
  definition: string;
  example?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface DictionaryResponse {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
}
