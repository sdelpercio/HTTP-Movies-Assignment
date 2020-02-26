import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';

function Movie({ addToSavedList }) {
	const [movie, setMovie] = useState(null);
	const match = useRouteMatch();
	const history = useHistory();

	const fetchMovie = id => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(res => setMovie(res.data))
			.catch(err => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};

	const updateMovie = e => {
		e.preventDefault();
		history.push(`/update-movie/${match.params.id}`);
	};

	const deleteMovie = e => {
		e.preventDefault();
		axios
			.delete(`http://localhost:5000/api/movies/${match.params.id}`)
			.then(res => {
				history.push('/');
				alert('Movie has been deleted');
			})
			.catch(err => {
				console.log(err);
				alert('Whoops, something went wrong');
			});
	};

	useEffect(() => {
		fetchMovie(match.params.id);
	}, [match.params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	return (
		<div className='save-wrapper'>
			<MovieCard movie={movie} />

			<div className='save-button' onClick={saveMovie}>
				Save
			</div>
			<div className='update-button' onClick={updateMovie}>
				Update
			</div>
			<div className='delete-button' onClick={deleteMovie}>
				Delete
			</div>
		</div>
	);
}

export default Movie;
