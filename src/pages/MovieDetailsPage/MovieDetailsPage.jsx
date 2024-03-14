import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMoviesById } from "../../movies-api";
import { Suspense, useEffect, useRef, useState } from "react";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const baseUrl = "https://image.tmdb.org/t/p/";
const fileSize = "w500";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  const getImageUrl = (filePath) => {
    return `${baseUrl}${fileSize}${filePath}`;
  };

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading && <p>Loading...</p>}
      {error && <NotFoundPage />}
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={getImageUrl(movie.poster_path)} alt="" />
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
