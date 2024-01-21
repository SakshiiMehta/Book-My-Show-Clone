import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc =
  (Component) =>
  (
    { ...props } //if it has some infoo to be shared then we have spread operator
  ) => {
    return (
      <div>
        <MovieNavbar />
        <component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
