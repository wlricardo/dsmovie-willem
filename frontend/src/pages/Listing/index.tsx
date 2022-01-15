import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {
  // FORMA ERRADA - SERPÁ CORRIGIDO POSTERIORMENTE
  axios.get(`${ BASE_URL }/movies?size=12`).then((response) => {
    console.log(response.data);
  });

  return (
    <>
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
