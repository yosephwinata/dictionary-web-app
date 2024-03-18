import { useQuery } from "@tanstack/react-query";
import { getDictionary } from "../services/apiDictionary";

export const useDictionary = (keyword: string) => {
  const query = useQuery({
    queryKey: ["dict", keyword],
    queryFn: () => getDictionary(keyword),
    enabled: !!keyword, // Query will only run when keyword is not an empty string
    // enabled: false, // Disable auto fetch. So it won't fetch on mount and re-renders, because we need to fetch manually ONLY on every "Enter" key press.
    retry: false,
  });

  // console.log("query", query); // Uncomment for debugging
  const { data, error, refetch, isLoading, isFetching, isRefetching, isError } =
    query;

  return { data, error, refetch, isLoading, isFetching, isRefetching, isError };
};
