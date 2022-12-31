import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <BannerHeader
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <HeaderContent>
        <Titale>{movie?.titale || movie?.name || movie?.original_name}</Titale>
        <BannerButtons>
          <Button>play</Button>
          <Button>my list</Button>
        </BannerButtons>
        <DscreptionCon>
          <Dscreption>{truncate(movie?.overview, 150)}</Dscreption>
        </DscreptionCon>
      </HeaderContent>
      <Fade></Fade>
    </BannerHeader>
  );
}
const Fade = styled.div`
  height: 7.5rem;
  margin-bottom: -5px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
const BannerHeader = styled.div`
  color: white;
  object-fit: contain;
  height: 449px;
`;
const HeaderContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;
const Titale = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
const BannerButtons = styled.div``;
const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;
  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
const DscreptionCon = styled.div``;
const Dscreption = styled.h1`
  font-size: 1rem;
  width: 45rem;
  line-height: 1.3;
  max-width: 360px;
  height: 80px;
`;

export default Banner;
