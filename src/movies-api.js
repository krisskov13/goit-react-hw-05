import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

export const getMovies = async () => {
  const response = await axios.get("/3/trending/movie/day", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZmMzk5MzNjNjhmODM1OTc0ODc4M2QyYzBhZjFjMiIsInN1YiI6IjY1ZjE5ZDBiZDY0YWMyMDE2NDVlMzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paLafgxK_DGxCOoXr6UzxWcgwK9W9gw5IOUl2bjW_Vg",
    },
  });
  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZmMzk5MzNjNjhmODM1OTc0ODc4M2QyYzBhZjFjMiIsInN1YiI6IjY1ZjE5ZDBiZDY0YWMyMDE2NDVlMzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paLafgxK_DGxCOoXr6UzxWcgwK9W9gw5IOUl2bjW_Vg",
    },
  });
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get("/3/search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZmMzk5MzNjNjhmODM1OTc0ODc4M2QyYzBhZjFjMiIsInN1YiI6IjY1ZjE5ZDBiZDY0YWMyMDE2NDVlMzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paLafgxK_DGxCOoXr6UzxWcgwK9W9gw5IOUl2bjW_Vg",
    },
    params: {
      query: query,
    },
  });
  return response.data.results;
};

export const getCast = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}/credits`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZmMzk5MzNjNjhmODM1OTc0ODc4M2QyYzBhZjFjMiIsInN1YiI6IjY1ZjE5ZDBiZDY0YWMyMDE2NDVlMzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paLafgxK_DGxCOoXr6UzxWcgwK9W9gw5IOUl2bjW_Vg",
    },
  });
  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}/reviews`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZmMzk5MzNjNjhmODM1OTc0ODc4M2QyYzBhZjFjMiIsInN1YiI6IjY1ZjE5ZDBiZDY0YWMyMDE2NDVlMzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paLafgxK_DGxCOoXr6UzxWcgwK9W9gw5IOUl2bjW_Vg",
    },
  });
  return response.data.results;
};
