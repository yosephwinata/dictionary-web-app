import Header from "./components/Header";
import SpeechParts from "./components/SpeechParts";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";

const App = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="w-[20.44rem]">
        <Header />
        <SearchBar />
        <Pronunciation />
        <SpeechParts />
      </div>
    </div>
  );
};

export default App;
