import axiosInstance from "../axios/axiosInstance";

// interface DictionaryResponse {}

export const getDictionary = async (keyword: string) => {
  try {
    const response = await axiosInstance.get(`/entries/en/${keyword}`);
    // console.log("response", response); // Uncomment for debugging
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("No Definitions Found");
  }
};
