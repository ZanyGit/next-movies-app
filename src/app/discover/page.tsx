import SearchField from "@/components/SearchField";
import CategoryFilter from "@/components/CategoryFilter";
import HighlightCard from "@/components/HighlightCard";
import CategoryDisplay from "@/components/CategoryDisplay";
import { getMoviesByGenre, searchMovie } from "@/api/mdb-api";
import { Movie } from "../interfaces";

const DiscoverPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";

  const categories = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 18,
      name: "Drama",
    },

    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },

    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const category = searchParams?.category || categories[0].id;
  const searchedMovies: Movie[] = await searchMovie(q);
  const moviesByGenre: Movie[] = await getMoviesByGenre(
    category || categories[0].id.toString()
  );
  return (
    <div className="h-full min-h-screen flex flex-row">
      <div className=" px-8 w-full">
        <div className="mt-10">
          <SearchField />
        </div>

        <h2 className="my-10 text-3xl font-bold text-white">Discover</h2>

        <CategoryFilter categories={categories} selected={category} />

        {searchedMovies.length ? (
          <>
            <CategoryDisplay movies={searchedMovies} title="Search result" />
          </>
        ) : (
          <>
            <CategoryDisplay
              movies={moviesByGenre}
              title={categories.filter((c) => c.id == category)[0].name}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
