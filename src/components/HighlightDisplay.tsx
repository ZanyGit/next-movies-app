import { Movie } from "@/app/interfaces";
import HighlightCard from "./HighlightCard";

const HighlightDisplay = (props: { movies: Movie[]; title: string }) => {
  return (
    <>
      <h2 className="text-white text-2xl my-10">{props.title}</h2>
      <div className="flex flex-col sm:flex-row w-full sm:space-x-6 space-y-5 sm:space-y-0 min-h-[200px] overflow-hidden my-10">
        {props.movies.slice(0, 2).map((movie) => (
          <HighlightCard {...movie} />
        ))}
      </div>
    </>
  );
};

export default HighlightDisplay;
