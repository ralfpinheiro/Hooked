import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =   "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie}) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className="movie">
            <div>
                <img alt={`The Movie titled: ${movie.Title}`} src={poster} />
            </div>
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">({movie.Year})</p>
        </div>
    );
};

export default Movie;