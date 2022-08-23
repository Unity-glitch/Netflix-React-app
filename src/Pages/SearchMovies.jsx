import React, { useState } from "react";
// import { useEffect } from "react";
import "../Pages/SearchMovies.css";
// import AosImage from "../assets/AosImage.jpg";
// import lihImage from "../assets/lihImage.jpg";
// import tdImage from "../assets/tdImage.jpg";
// import pllImage from "../assets/pllImage.jpg";
import NetflixLogo from "../assets/NetflixLogo.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import { atom, RecoilRoot, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const counterState = atom({
  key: "data",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

// const API_KEY = `http://www.omdbapi.com/?i=tt3896198&apikey=bfef51f`;

const API_KEY = import.meta.env.VITE_API_KEY;

function SearchMovies() {

  const [data, setData] = useRecoilState(counterState)
  const [location, setLocation] = useState("");
  // const url = `http://www.omdbapi.com/?q=${location}apikey=${API_KEY}`;
  const url = `http://www.omdbapi.com/?t=${location}&apikey=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key == "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data)

        }
        )
        setLocation("")
    }
  }

// const [movies, setMovies] = useState()
// const [SearchTerm, setSearchTerm] = useState()
// const searchMovies = async(title) => {
//   const response = await fetch(`${API_KEY}&s=${title}`)
//   const data = await response.json();
//   console.log(data.Search);
//   setMovies(data.Search)
// }

//   useEffect(() => {
//     setSearchTerm("superman");
//   })

return (
  <div>
    <div className="Section__Movie">
      <div className="Header__section">
        <div className="image__logo__left">
          <Link to="/">
            <img className="Logo__Text" src={NetflixLogo}></img>
          </Link>
        </div>
        <div className="Sign__out__btn">
          <Link to="/">
            <button className="Login__Button">Sign Out</button>
          </Link>
        </div>
      </div>
      <div className="input__hero">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          className="type__input_text"
          type="text"
          placeholder="Click here to Search"
        ></input>
      </div>
      <div className="input__field__movie">
        <div className="movie__display">
          <div className="card__1">
            <div className="image__container">
              <img src={data.Poster}className="movie__images1"></img>
            </div>
            <div className="movie__description">
              <h5 className="genre">{data.Type}</h5>
              <p className="tittle">
                <span>Title:</span>{data.Title}
              </p>
              <p className="R__date">
                <span>Release Date:</span>{data.Released}
              </p>
              <p className="Genre__text">
                <span>Genre:</span>{data.Genre}
              </p>
              <p className="summary__movies">
              <span>Summary:</span>
                {data.Plot}
              </p>
              <p className="lang__movie">
                <span>Language:</span>{data.Language}
              </p>
            </div>
          </div>
          <div className="card__1">
            <div className="image__container">
              <img src={data.Poster}className="movie__images1"></img>
            </div>
            <div className="movie__description">
              <h5 className="genre">{data.Type}</h5>
              <p className="tittle">
                <span>Title:</span>{data.Title}
              </p>
              <p className="R__date">
                <span>Release Date:</span>{data.Released}
              </p>
              <p className="Genre__text">
                <span>Genre:</span>{data.Genre}
              </p>
              <p className="summary__movies">
              <span>Summary:</span>
                {data.Plot}
              </p>
              <p className="lang__movie">
                <span>Language:</span>{data.Language}
              </p>
            </div>
          </div>
          <div className="card__1">
            <div className="image__container">
              <img src={data.Poster}className="movie__images1"></img>
            </div>
            <div className="movie__description">
              <h5 className="genre">{data.Type}</h5>
              <p className="tittle">
                <span>Title:</span>{data.Title}
              </p>
              <p className="R__date">
                <span>Release Date:</span>{data.Released}
              </p>
              <p className="Genre__text">
                <span>Genre:</span>{data.Genre}
              </p>
              <p className="summary__movies">
              <span>Summary:</span>
                {data.Plot}
              </p>
              <p className="lang__movie">
                <span>Language:</span>{data.Language}
              </p>
            </div>
          </div>
          <div className="card__1">
            <div className="image__container">
              <img src={data.Poster}className="movie__images1"></img>
            </div>
            <div className="movie__description">
              <h5 className="genre">{data.Type}</h5>
              <p className="tittle">
                <span>Title:</span>{data.Title}
              </p>
              <p className="R__date">
                <span>Release Date:</span>{data.Released}
              </p>
              <p className="Genre__text">
                <span>Genre:</span>{data.Genre}
              </p>
              <p className="summary__movies">
              <span>Summary:</span>
                {data.Plot}
              </p>
              <p className="lang__movie">
                <span>Language:</span>{data.Language}
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
);
}

export default SearchMovies;
