import { useEffect } from "react";
import { getMovies } from "../../movies-api.js";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <p>Loading movies...</p>}
      {error && <NotFoundPage />}
    </div>
  );
}
