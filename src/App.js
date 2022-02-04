import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./store/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import MovieList from "./components/MovieList";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<div className="container col-10 mt-5">
			<MovieList />
		</div>
	);
};

export default App;
