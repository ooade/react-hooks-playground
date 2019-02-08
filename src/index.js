import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const AwesomePage = () => <div>Welcome to my awesome page</div>;

const Index = () => {
	const [cleanedup, updateCleanup] = useState(false);

	return (
		<div>
			{cleanedup ? <AwesomePage /> : <App />}
			<button onClick={updateCleanup} className="cleanup-btn">
				Clean Up
			</button>
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
