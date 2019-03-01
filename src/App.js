import React, { useState, useEffect } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Jokes from './Jokes/Jokes';
import Register from './components/Register';

function App(props) {
	const [username, setUsername] = useState('');
	const handleLogout = () => {
		localStorage.removeItem('jwt');
		props.history.push('/login');
	};

	useEffect(() => {
		setUsername(localStorage.getItem('username'));
	});

	return (
		<>
			<header>
				<nav>
					<div className="navLeft">
						{localStorage.getItem('jwt') ? null : (
							<div>
								<NavLink to="/login">Login</NavLink> &nbsp;|&nbsp;
								<NavLink to="/register">Register</NavLink>
								&nbsp;|&nbsp;
							</div>
						)}
						<NavLink to="/jokes">Jokes</NavLink>
					</div>
					<div className="navRight">
						<div className="username">{username}</div>
						<button
							onClick={() => {
								handleLogout();
							}}>
							Logout
						</button>
					</div>
				</nav>
			</header>
			<main>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/jokes" component={Jokes} />
			</main>
		</>
	);
}

export default withRouter(App);
