import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [state, updateState] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{ username: '', password: '' }
	);

	const { username, password } = state;

	return (
		<div className="App">
			<div className="LeftPane">
				<img src={logo} alt="website-logo" className="logo" />
				<form>
					<FormInput
						label="Username"
						value={username}
						onChange={e => updateState({ username: e.target.value })}
					/>
					<FormInput
						label="Password"
						type="password"
						value={password}
						onChange={e => updateState({ password: e.target.value })}
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
