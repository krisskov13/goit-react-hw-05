import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../movies-api";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const baseUrl = "https://image.tmdb.org/t/p/";
const fileSize = "w500";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getCast(movieId);
        setActors(data);
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
      {isLoading && <p>Loading...</p>}
      {error && <NotFoundPage />}
      {actors.length > 0 ? (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
              <img src={getImageUrl(actor.profile_path)} alt="" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No information available about the cast</p>
      )}
    </div>
  );
}
