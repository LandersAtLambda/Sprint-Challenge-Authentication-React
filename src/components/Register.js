import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
	const [value, setValue] = useState({
		username: '',
		password: '',
		department: '',
	});

	const handleChange = e => {
		e.preventDefault();
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const submitLogin = e => {
		e.preventDefault();
		let user = {
			username: value.username,
			password: value.password,
			department: value.department,
		};
		axios
			.post('http://localhost:5000/api/register', user)
			.then(res => {
				console.log(res);
				props.history.push('/login');
			})
			.catch(err => console.log(err));
	};
	return (
		<form onSubmit={e => submitLogin(e)}>
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
			<input
				name="department"
				type="text"
				value={value.department}
				placeholder="department"
				onChange={e => handleChange(e)}
			/>

			<button type="submit">Register</button>
		</form>
	);
}

export default Login;
