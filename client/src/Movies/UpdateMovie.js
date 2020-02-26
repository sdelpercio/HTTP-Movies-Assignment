import React from 'react';

const UpdateMovie = props => {
	return (
		<div className='movie-card'>
			<h2>Update Movie</h2>
			<form>
				<input
					type='text'
					name='title'
					// value={}
					// onChange={}
					placeholder='movie title'
					required
				/>
				<input
					type='text'
					name='director'
					// value={}
					// onChange={}
					placeholder='director'
					required
				/>
				<input
					type='number'
					name='metascore'
					// value={}
					// onChange={}
					placeholder='metascore'
					required
				/>
				<input
					type='textarea'
					name='stars'
					// value={}
					// onChange={}
					placeholder='stars separated by commas'
					required
				/>
				<button>Update</button>
			</form>
		</div>
	);
};

export default UpdateMovie;
