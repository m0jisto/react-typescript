import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { TodoPages, AboutPages } from './pages';
import { Navbar } from './components';

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Switch>
					<Route path="/" component={TodoPages} exact />
					<Route path="/about" component={AboutPages} exact />
				</Switch>
			</div>
		</>
	);
};

export default App;
