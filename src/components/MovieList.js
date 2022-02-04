import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Paginate from "./Paginate";
import Filter from "./Filter";

const MovieList = () => {
	const { searchResults } = useSelector((state) => state.movieReducer);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviePerPage, setMoviePerPage] = useState(4);

	const totalMovies = searchResults.length;

	const indexOfLastPost = currentPage * moviePerPage;
	const indexOfFirstPost = indexOfLastPost - moviePerPage;
	const filterMovies = searchResults.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			<Filter />

			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3">
				{filterMovies.map((movie) => (
					<MovieItem {...movie} key={movie.id} />
				))}
			</div>

			<Paginate
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalMovies={totalMovies}
				moviePerPage={moviePerPage}
				setMoviePerPage={setMoviePerPage}
			/>
		</>
	);
};

export default MovieList;
