import React from 'react';

class App extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { username, password } = this.state;

		return (
			<div className="App">
				<div className="LeftPane">
					<img src={logo} alt="website-logo" className="logo" />
					<form>
						<FormInput
							name="username"
							label="Username"
							value={username}
							onChange={this.handleInputChange}
						/>
						<FormInput
							name="password"
							label="Password"
							type="password"
							value={password}
							onChange={this.handleInputChange}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
				<div className="RightPane" />
			</div>
		);
	}
}
