import * as actionTypes from "./actionTypes";
import { movies$ } from "../../dummyData/movies";

export const setMovies = (movies) => {
	return {
		type: actionTypes.SET_MOVIES,
		movies: movies
	};
};

export const fetchMoviesFailed = (error) => {
	return {
		type: actionTypes.FETCH_MOVIES_FAILED,
		error: error
	};
};

export const fetchMovies = () => {
	return (dispatch) => {
		movies$
			.then((response) => {
				dispatch(setMovies(response));
			})
			.catch((error) => {
				dispatch(fetchMoviesFailed(error));
			});
	};
};

export const likeMovie = (movieId) => {
	return {
		type: actionTypes.LIKE_MOVIE,
		movieId: movieId
	};
};

export const dislikeMovie = (movieId) => {
	return {
		type: actionTypes.DISLIKE_MOVIE,
		movieId: movieId
	};
};

export const deleteMovie = (movieId) => {
	return {
		type: actionTypes.DELETE_MOVIE,
		movieId: movieId
	};
};

export const searchMovie = (category) => {
	return {
		type: actionTypes.SEARCH_MOVIES,
		category: category
	};
};
