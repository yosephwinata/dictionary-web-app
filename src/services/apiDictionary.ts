import axiosInstance from "../axios/axiosInstance";
import { DictionaryResponse } from "../types/types";

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
