import * as actionTypes from "../actions/actionTypes";

const initialState = {
	movies: [],
	searchResults: [],
	error: ""
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_MOVIES:
			return {
				...state,
				movies: action.movies,
				searchResults: action.movies
			};
		case actionTypes.LIKE_MOVIE:
			return {
				...state,
				movies: state.movies.map((movie) => {
					if (movie.id === action.movieId) {
						return {
							...movie,
							likes: movie.likes + 1
						};
					}
					return movie;
				})
			};
		case actionTypes.DISLIKE_MOVIE:
			return {
				...state,
				movies: state.movies.map((movie) => {
					if (movie.id === action.movieId) {
						return {
							...movie,
							dislikes: movie.dislikes + 1
						};
					}
					return movie;
				})
			};
		case actionTypes.DELETE_MOVIE:
			const updatedMovies = state.movies.filter(
				(movie) => movie.id !== action.movieId
			);

			const updatedSearchResults = state.searchResults.filter(
				(movie) => movie.id !== action.movieId
			);
			return {
				...state,
				movies: updatedMovies,
				searchResults: updatedSearchResults
			};

		case actionTypes.SEARCH_MOVIES:
			if (action.category === "") {
				return {
					...state,
					searchResults: state.movies
				};
			}
			const movieResults = state.movies.filter(
				(movie) => movie.category === action.category
			);

			return {
				...state,
				searchResults: movieResults
			};

		case actionTypes.FETCH_MOVIES_FAILED:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default movies;
