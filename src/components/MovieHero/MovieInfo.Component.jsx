import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };
  return (
    <>
      {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />; */}
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold ">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2 ">
          <h4>4.4k rating</h4>
          <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
