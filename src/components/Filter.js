import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../store/actions";

const Filter = () => {
	const { movies } = useSelector((state) => state.movieReducer);
	const dispatch = useDispatch();
	const movieCategories = movies.map((movie) => movie.category);
	const uniqueMovieCategories = [...new Set(movieCategories)];

	const handleSearch = (event) => {
		dispatch(searchMovie(event.target.value));
	};

	return (
		<select
			className="form-select form-select-sm mt-3 select-filter"
			onChange={(event) => handleSearch(event)}>
			<option value="">Category</option>
			{uniqueMovieCategories &&
				uniqueMovieCategories.map((category, idx) => (
					<option value={category} key={idx}>
						{category}
					</option>
				))}
		</select>
	);
};

export default Filter;
