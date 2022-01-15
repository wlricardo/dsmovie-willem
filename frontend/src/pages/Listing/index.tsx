import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=2`).then((response) => {
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);
=======
import { BASE_URL } from "utils/requests";

function Listing() {
  // FORMA ERRADA - SERPÁ CORRIGIDO POSTERIORMENTE
  axios.get(`${ BASE_URL }/movies?size=12`).then((response) => {
    console.log(response.data);
  });
>>>>>>> 2bf982d91fb4b57dc0990bf3e741f199f822eaab

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl- mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl- mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl- mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl- mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl- mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
