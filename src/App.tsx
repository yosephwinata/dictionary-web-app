import Header from "./components/Header";
import SpeechParts from "./features/dictionary/SpeechParts";
import Pronunciation from "./features/dictionary/Pronunciation";
import SearchBar from "./ui/SearchBar";
import Source from "./features/dictionary/Source";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDictionary } from "./features/dictionary/useDictionary";
import { ChangeEvent, KeyboardEvent } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DictionaryResponse } from "./types/types";
import useBoundStore from "./useBoundStore";
import NoDefinitionsFound from "./ui/NoDefinitionsFound";
import Spinner from "./ui/Spinner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 1000, // in milisecond
      // refetchOnWindowFocus: false, // default: true
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="flex justify-center pb-[5.3rem] pt-6">
        <AppContainer />
      </div>
    </QueryClientProvider>
  );
};

const AppContainer = () => {
  const searchInput = useBoundStore((state) => state.searchInput);
  const setSearchInput = useBoundStore((state) => state.setSearchInput);
  const fetchKeyword = useBoundStore((state) => state.fetchKeyword);
  const setFetchKeyword = useBoundStore((state) => state.setFetchKeyword);
  // const [searchInput, setSearchInput] = useState("");
  // const [fetchKeyword, setFetchKeyword] = useState("");

  const { data, error, isLoading, isError } = useDictionary(fetchKeyword);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // This will trigger React Query to fetch the API
      setFetchKeyword(searchInput);
    }
  };

  return (
    <div className="w-[20.44rem]">
      <Header />
      <main>
        <SearchBar
          onKeyDown={handleKeyDown}
          searchInput={searchInput}
          onSearchInputChange={handleSearchInputChange}
        />
        {isLoading && <LoadingIndicator />}
        {isError && <NoDefinitionsFound />}
        {data && <Results data={data} />}
      </main>
    </div>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="flex h-52 w-full flex-col items-center justify-center">
      <Spinner />
      <p className="text-gray-1 mt-2 text-lg">Loading</p>
    </div>
  );
};

const Results = ({ data }: { data: DictionaryResponse[] }) => {
  const { word, phonetics, meanings, sourceUrls } = data[0]; // Destructure the fetched data

  return (
    <div className="mt-6">
      <Pronunciation word={word} phonetics={phonetics} />
      <SpeechParts meanings={meanings} />
      <HorizontalLine />
      {sourceUrls.length > 0 && <Source sourceUrls={sourceUrls} />}
    </div>
  );
};

const HorizontalLine = () => {
  return <div className="bg-gray-2 mb-6 h-[0.0625rem] w-full"></div>;
};

export default App;
