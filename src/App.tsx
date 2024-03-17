import Header from "./components/Header";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";

const App = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="w-[20.44rem]">
        <div className="mb-6">
          <Header />
        </div>
        <div className="mb-6">
          <SearchBar />
        </div>
        <Pronunciation />
      </div>
    </div>
  );
};

export default App;
