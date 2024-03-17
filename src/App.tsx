import Header from "./components/Header";
import SpeechParts from "./components/SpeechParts";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";
import Source from "./components/Source";

const App = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="w-[20.44rem]">
        <Header />
        <SearchBar />
        <Pronunciation />
        <SpeechParts />
        <HorizontalLine />
        <Source />
      </div>
    </div>
  );
};

const HorizontalLine = () => {
  return <div className="bg-gray-2 mb-6 h-[0.0625rem] w-full"></div>;
};

export default App;
