import IconNewWindow from "../svg/IconNewWindow";

interface SourceProps {
  sourceUrls: string[];
}

const Source = ({ sourceUrls }: SourceProps) => {
  return (
    <div>
      <p className="text-gray-1 decoration-gray-2 mb-1 text-[0.875rem] font-normal underline decoration-2 underline-offset-2">
        Source
      </p>
      {sourceUrls.map((url) => (
        <div key={url} className="flex items-center gap-1.5">
          <a
            href={url}
            className="pointer black-3 decoration-gray-1 text-[0.875rem] font-normal underline underline-offset-2"
          >
            {url}
          </a>
          <IconNewWindow />
        </div>
      ))}
    </div>
  );
};

export default Source;
