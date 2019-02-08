import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="App">
			<div className="LeftPane">
				<img src={logo} alt="website-logo" className="logo" />
				<form>
					<FormInput
						label="Username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<FormInput
						label="Password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="RightPane">
				{username && <p>Username: {username}</p>}
				{password && <p>Password: {password}</p>}
			</div>
		</div>
	);
}

function FormInput({ type = 'text', label, value, onChange }) {
	return (
		<div className="FormInput">
			<label>{label}</label>
			<input type={type} value={value} onChange={onChange} />
		</div>
	);
}

export default App;
