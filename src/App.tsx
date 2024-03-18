import Header from "./components/Header";
import SpeechParts from "./components/SpeechParts";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";
import Source from "./components/Source";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDictionary } from "./hooks/useDictionary";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <div className="flex justify-center pt-6">
        <AppContainer />
      </div>
    </QueryClientProvider>
  );
};

const AppContainer = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchKeyword, setFetchKeyword] = useState("");

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

  // console.log("data", data);
  // const { phonetics, meanings, sourceUrls } = data[0]; // Destructure the fetched data

  return (
    <div className="w-[20.44rem]">
      <Header />
      <main>
        <SearchBar
          onKeyDown={handleKeyDown}
          searchInput={searchInput}
          onSearchInputChange={handleSearchInputChange}
        />
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error?.message}</p>}
        {/* {data && <Results />} */}
        {data && <p>FOUND!!</p>}
      </main>
    </div>
  );
};

const Results = () => {
  return (
    <div>
      <Pronunciation />
      <SpeechParts />
      <HorizontalLine />
      <Source />
    </div>
  );
};

const HorizontalLine = () => {
  return <div className="bg-gray-2 mb-6 h-[0.0625rem] w-full"></div>;
};

export default App;
