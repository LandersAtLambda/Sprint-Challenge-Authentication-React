import React, { useState, useEffect } from 'react';
import requiresAuth from '../auth/requiresAuth';
import axios from 'axios';

function Jokes() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/jokes')
			.then(res => {
				setJokes(res.data);
			})
			.catch(err => console.log(err.message));
	}, []);

	return (
		<div className="jokesWrapper">
			<div className="jokeList">
				<h1>Dad Jokes</h1>
				{jokes.map(joke => (
					<div className="joke" key={joke.id}>
						<p>{joke.joke}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default requiresAuth(Jokes);
