import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../movies-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const titleFilter = params.get("query") ?? "";

  const changeTitleFilter = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(titleFilter);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [titleFilter]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={titleFilter}
          onChange={(e) => changeTitleFilter(e.target.value)}
        />
      </div>
      {isLoading && <p>Loading movies...</p>}
      {error && <NotFoundPage />}
      <MovieList movies={movies} />
    </div>
  );
}
