/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function Banner(props) {
  const [banner, setBanner] = useState([]);
  const url_base_path = "https://api.themoviedb.org/3/";
  const img_base_path = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url_base_path + props.endpoint);
      const result = await response.json();
      setBanner(
        result.results[Math.floor(Math.random() * result.results.length)]
      );
    }
    fetchData();
  }, []);

  function trimmed(text) {
    return text.length > 100 ? text.slice(0, 100) + " ..." : text;
  }

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${img_base_path}${banner.backdrop_path})`,
      }}
    >
      <div className="text">
        <h2>{banner.name || banner.original_name || banner.title || banner.original_title}</h2>
        <div className="buttons">
          <a href="">
            <span className="material-symbols-outlined">play_arrow</span> Play
          </a>
          <a href="">
            <span className="material-symbols-outlined">add</span>My List
          </a>
        </div>
        <p>{banner.overview ? trimmed(banner.overview) : ""}</p>
      </div>
    </section>
  );
}

export default Banner;
