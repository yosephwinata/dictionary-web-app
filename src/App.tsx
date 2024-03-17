import Header from "./components/Header";
import Meaning from "./components/Meaning";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";

const App = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="w-[20.44rem]">
        <Header />
        <SearchBar />
        <Pronunciation />
        <Meaning />
      </div>
    </div>
  );
};

export default App;
