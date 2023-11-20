export async function getNowPlaying() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIEDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetching movies ");
  }
}

export async function getTopRated() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetching movies ");
  }
}

export async function getPopular() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetching movies ");
  }
}

export async function searchMovie(movie: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${movie}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetching movies ");
  }
}

export async function getMoviesByGenre(genre: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&with_genres=${genre}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetching movies ");
  }
}
