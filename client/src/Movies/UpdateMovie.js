import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = props => {
	const initialMovie = {
		title: '',
		director: '',
		metascore: 0,
		stars: ''
	};

	const [editMovie, setEditMovie] = useState(initialMovie);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(res => {
				setEditMovie(res.data);
			})
			.catch(err => console.log('error from form', err));
	}, [id]);

	const handleChange = e => {
		setEditMovie({
			...editMovie,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className='movie-card'>
			<h2>Update Movie</h2>
			<form className='movie-form'>
				<input
					type='text'
					name='title'
					value={editMovie.title}
					onChange={handleChange}
					placeholder='movie title'
					required
				/>
				<input
					type='text'
					name='director'
					value={editMovie.director}
					onChange={handleChange}
					placeholder='director'
					required
				/>
				<input
					type='number'
					name='metascore'
					value={editMovie.metascore}
					onChange={handleChange}
					placeholder='metascore'
					required
				/>
				<input
					type='textarea'
					name='stars'
					value={editMovie.stars}
					onChange={handleChange}
					placeholder='stars separated by commas'
					required
				/>
				<button>Update</button>
			</form>
		</div>
	);
};

export default UpdateMovie;
