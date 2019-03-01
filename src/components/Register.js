import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
	const [value, setValue] = useState({
		username: '',
		password: '',
		message: '',
	});

	const handleChange = e => {
		e.preventDefault();
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const submitRegister = e => {
		e.preventDefault();
		let user = {
			username: value.username,
			password: value.password,
		};
		axios
			.post('http://localhost:5000/api/register', user)
			.then(res => {
				console.log(res);
				props.history.push('/login');
			})
			.catch(err => {
				console.log(err);
				setValue({ message: err.message });
			});
	};
	return (
		<div>
			{value.message ? <div className="error">{value.message}</div> : null}

			<form onSubmit={e => submitRegister(e)}>
				<input
					name="username"
					type="text"
					value={value.username}
					placeholder="username"
					onChange={e => handleChange(e)}
				/>
				<input
					name="password"
					type="password"
					value={value.password}
					placeholder="password"
					onChange={e => handleChange(e)}
				/>

				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default Login;
