import React from 'react';

const Navbar: React.FC = () => (
	<nav className="purple darken-2">
		<div className="nav-wrapper container">
			<a href="/" className="brand-logo">
				React + TypeScript
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<a href="/">Список дел</a>
				</li>
				<li>
					<a href="/">О нас</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
