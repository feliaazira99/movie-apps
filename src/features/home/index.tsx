import { Movie, ResponseMovie } from "../../services/movie/type";
import { getMovieDetails, getNowPlaying } from "../../services/movie";
import { useEffect, useState } from "react";

import MovieCard from "../../components/movie-card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hook/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await getNowPlaying(page as string);
      setNowPlayingData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const handleBackPage = () => {
    const numPage = Number(page);
    if (numPage > 1) {
      navigate(`?page=${numPage - 1}`);
    }
  };

  const handleCardClick = async (id: number) => {
    try {
      const response = await getMovieDetails(id.toString());
      setSelectedMovie(response);
      navigate(`/details/${id}`); // Navigasi ke halaman detail dengan ID
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col p-5">
      <label className="text-xl font-semibold p-3">Movies List</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {nowPlayingData?.results.map((item: Movie) => (
            <MovieCard
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              size="w-40"
              onClick={() => handleCardClick(item.id)} // Tambahkan onClick handler
            />
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      <div className="flex flex-row justify-center gap-3 p-8">
        <button
          onClick={handleBackPage}
          className="bg-gray-300 p-2 rounded-sm"
          disabled={Number(page) <= 1}
        >
          Back
        </button>
        <button onClick={handleNextPage} className="bg-gray-300 p-2 rounded-sm">
          Next
        </button>
      </div>
      {selectedMovie && (
        <div className="flex flex-col p-5">
          <img
            src={`https://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <h1 className="text-2xl font-bold">{selectedMovie.title}</h1>
          <p>{selectedMovie.release_date}</p>
          <p>{selectedMovie.popularity}</p>
          <p>{selectedMovie.original_language}</p>
          <p> {selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
