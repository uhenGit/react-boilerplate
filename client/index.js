import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import App from './components/App.jsx';
render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
