/* eslint-disable react/prop-types */
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function Row(props) {
  const url_base_path = "https://api.themoviedb.org/3/";
  const img_base_path = "https://image.tmdb.org/t/p/original";

  const videoPlayerOptions = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url_base_path + props.endpoint);
      const result = await response.json();
      setMovies(result.results);
    }
    fetchData();
  }, []);

  async function handleClick(movie) {
    const param = movie.name ? movie.name : movie.title;
    const link = await movieTrailer(param);

    if (link) {
      const searchParams = new URLSearchParams(link);
      for (const [key, value] of searchParams.entries()) {
        setTrailer(value);
      }
    }

  }

  return (
    <>
      {trailer ? (
        <div className="frame">
          <span className="close" onClick={() => setTrailer(false)}>
            &times;
          </span>
          <YouTube opts={videoPlayerOptions} videoId={trailer} />
        </div>
      ) : (
        ""
      )}

      <div className={props.bigImage ? "movies biggerImage" : "movies"}>
        <h2>{props.heading}</h2>
        <div className="movie-wrapper">
          {movies.map((movie, index) => {
            return (
              <div key={index} className="movie">
                <img
                  src={img_base_path + movie.poster_path}
                  loading="lazy"
                  onClick={() => handleClick(movie)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
