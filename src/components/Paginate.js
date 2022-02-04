import React from "react";

const Paginate = ({
	currentPage,
	setCurrentPage,
	totalMovies,
	moviePerPage,
	setMoviePerPage
}) => {
	const totalPages = Math.ceil(totalMovies / moviePerPage);

	const pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<div className="d-flex justify-content-evenly">
			{totalMovies > 5 && (
				<select
					className="pagination-select form-select form-select-sm"
					onChange={(event) => setMoviePerPage(event.target.value)}>
					<option value={4}>4</option>
					<option value={8}>8</option>
					<option value={12}>12</option>
				</select>
			)}

			{totalPages > 1 && (
				<ul className="pagination">
					<li className={`page-item ${currentPage === 1 && `disabled`}`}>
						<button
							className="page-link"
							onClick={() => setCurrentPage(currentPage - 1)}>
							&laquo;
						</button>
					</li>
					{pages.map((page) => (
						<li
							key={page}
							className={`page-item ${page === currentPage && `active`}`}
							onClick={() => setCurrentPage(page)}>
							<button className="page-link">{page}</button>
						</li>
					))}
					<li
						className={`page-item ${currentPage === totalPages && `disabled`}`}>
						<button
							className="page-link"
							onClick={() => setCurrentPage(currentPage + 1)}>
							&raquo;
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Paginate;
