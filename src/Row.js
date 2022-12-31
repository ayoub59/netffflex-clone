import { React, useState, useEffect } from "react";
import axios from "./axios";
import styled from "styled-components";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
  //state for the
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //the base url for the poster image
  const base_url = "https://image.tmdb.org/t/p/original";
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      }).catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    //this fuction will only fire when the page reloads
    async function fetchData() {
      //await i basiclly saying "wait for the premese to come back()the ppromese is the responde"
      const request = await axios.get(fetchUrl);
      // request.data.results is the result that i resived as an api answer
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <Roow>
      <Titale>{title}</Titale>
      {/* <h1>{titale}</h1> */}
      {/* posters */}
      <Posters>
        {movies.map((movie) => (
          // we pass the isLargeRow as a prope in the row comeponent, the line bellow basiclly chnage the styling of the return components if the isLargeRow prope was true(remember the if prop was pass down it's always true )
          //if the isLargeRow = true{which the originale row does} add an aditionale class "row_posterLarge"
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            //if your are uring a large row then use the poster path
            //:= therewise use the backdrop path aka the wider poster
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
            key={movie.id}
            onClick={() => handleClick(movie)}
          />
        ))}
      </Posters>
      {/* &&trailerUrl */}

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </Roow>
  );
}
export default Row;
const Roow = styled.div`
  margin-left: 20px;
  color: #fff;
`;
const Titale = styled.h1`
  color: white;
`;
const Posters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
