import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
      <div className="row">
        <div className="col-sm-6 colg-lg-4 col-xl-3 col-xx1-2 mb-3">
          <MovieCard />
        </div>
      </div>
      </div>
    </>
  );
}

export default Listing;