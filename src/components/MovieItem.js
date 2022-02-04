import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Like } from "../assets/images/like.svg";
import { ReactComponent as Dislike } from "../assets/images/dislike.svg";
import { likeMovie, dislikeMovie, deleteMovie } from "../store/actions";

const MovieItem = ({ id, title, category, likes, dislikes }) => {
	const dispatch = useDispatch();

	const handleDeleteMovie = (id) => {
		const message = "Are you sure you want to delete a movie";
		if (window.confirm(message) === true) {
			dispatch(deleteMovie(id));
		} else {
			return;
		}
	};

	return (
		<div className="col mb-4">
			<div className="card text-center">
				<div className="card-body">
					<h6 className="card-title">{title}</h6>
					<p className="card-text">{category}</p>
					<div className="d-flex justify-content-around">
						<div>
							<div onClick={() => dispatch(likeMovie(id))}>
								<Like />
							</div>
							{likes}
						</div>

						<div>
							<div onClick={() => dispatch(dislikeMovie(id))}>
								<Dislike />
							</div>
							{dislikes}
						</div>
					</div>

					<button
						className="btn btn-outline-danger"
						onClick={() => handleDeleteMovie(id)}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
