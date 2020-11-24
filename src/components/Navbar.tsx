import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
	<nav className="purple darken-2">
		<div className="nav-wrapper container">
			<NavLink to="/" className="brand-logo">
				React + TypeScript
			</NavLink>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<NavLink to="/">Список дел</NavLink>
				</li>
				<li>
					<NavLink to="/about">О нас</NavLink>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
