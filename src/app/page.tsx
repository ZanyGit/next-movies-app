import SearchField from "@/components/SearchField";
import CategoryDisplay from "@/components/CategoryDisplay";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  searchMovie,
} from "@/api/mdb-api";
import { Movie } from "./interfaces";
import HighlightDisplay from "@/components/HighlightDisplay";

const HomePage = async ({ searchParams }) => {
  const q = searchParams?.q || "";

  const searchedMovies: Movie[] = await searchMovie(q);
  const nowPlaying: Movie[] = await getNowPlaying();
  const topRated: Movie[] = await getTopRated();
  const popularMovies: Movie[] = await getPopular();
  return (
    <div className="h-full min-h-screen flex flex-row">
      <div className=" px-8 w-full">
        <div className="mt-10">
          <SearchField />
        </div>

        {searchedMovies.length ? (
          <>
            <CategoryDisplay movies={searchedMovies} title="Search result" />
          </>
        ) : (
          <>
            <HighlightDisplay movies={nowPlaying} title="Now playing" />
            <CategoryDisplay movies={topRated} title="Top rated" />

            <CategoryDisplay movies={popularMovies} title="Popular" />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
