import Header from "./components/Header";
import SpeechParts from "./components/SpeechParts";
import Pronunciation from "./components/Pronunciation";
import SearchBar from "./ui/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="w-[20.44rem]">
        <Header />
        <main>
          <SearchBar />
          <Pronunciation />
          <SpeechParts />
          <HorizontalLine />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const HorizontalLine = () => {
  return <div className="bg-gray-2 mb-6 h-[0.0625rem] w-full"></div>;
};

export default App;
