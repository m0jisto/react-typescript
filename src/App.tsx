import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { TodoPage, AboutPage } from './pages';
import { Navbar } from './components';
import { ITodo } from './interfaces';

const App: React.FC = () => {
		return (
		<>
			<Navbar />
			<div className="container">
				<Switch>
					<Route path="/" component={TodoPage} exact />
					<Route path="/" component={AboutPage} exact />
				</Switch>
			</div>
		</>
	);
};

export default App;
