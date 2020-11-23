import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
	<nav className="purple darken-2">
		<div className="nav-wrapper container">
			<Navlink to="/" className="brand-logo">
				React + TypeScript
			</Navlink>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<Navlink to="/">Список дел</Navlink>
				</li>
				<li>
					<Navlink to="/about">О нас</Navlink>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
