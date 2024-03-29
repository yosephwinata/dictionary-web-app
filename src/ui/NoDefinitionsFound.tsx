const NoDefinitionsFound = () => {
  return (
    <div>
      <p className="mb-7 mt-20 text-center text-5xl md:mb-11 md:mt-[8.25rem]">
        😕
      </p>
      <p className="text-black-3 mb-6 text-center text-[1.1rem] font-bold md:text-[1.25rem] dark:text-white">
        No Definitions Found
      </p>
      <p className="text-gray-1 text-center text-[1rem] md:text-[1.125rem]">
        We couldn't find the definitions for the word you were looking for. You
        can try the search again at a later time or try a different word.
      </p>
    </div>
  );
};

export default NoDefinitionsFound;
