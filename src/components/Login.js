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
	const submitLogin = e => {
		e.preventDefault();
		let user = {
			username: value.username,
			password: value.password,
		};
		axios
			.post('http://localhost:5000/api/login', user)
			.then(res => {
				console.log(res);
				localStorage.setItem('jwt', res.data.token);
				localStorage.setItem('username', res.data.username);

				props.history.push('/jokes');
			})
			.catch(err => {
				console.log(err.message);
				setValue({ message: err.message });
			});
	};
	return (
		<div>
			{value.message ? <div className="error">{value.message}</div> : null}

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
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
