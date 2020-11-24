import React from 'react';
import { Link } from 'react-router-dom';

const AboutPages: React.FC = () => (
	<>
		<h1>Страница информации</h1>
		<p>Lorem ipsum</p>
		<Link to="/" className="btn">
			Обратно к списку дел
		</Link>
	</>
);

export default AboutPages;
