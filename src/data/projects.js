import game from '../static/game.svg';
import price_tag from '../static/price-tag.svg';
import chess from '../static/chess.svg';

const projects = [
	{
		id: 0,
		name: 'Price Quoter',
		repo: 'https://github.com/bigthurs/MERN-Price-Quoter',
		link: 'https://boiling-depths-38435.herokuapp.com/',
		newTab: true,
		description:
			'A sanitized example of an application I built at MDR Pharmacy to replace manual price quoting by internal users.',
		stack:
			'Built on the MERN stack. React with Materialize for styling, MongoDB with mongoose, Node and Express with Restful API.',
		img: price_tag
	},
	{
		id: 1,
		name: 'Victory Keeper',
		repo: 'github.com/victorykeeper',
		link: './victorykeeper',
		newTab: false,
		description:
			'A utility built for myself and my friends to digitalize board game vicotry point and condition tracking.',
		stack:
			'Svelte with Materialize for styling and custom css components.Node backend, hosted on Netlify, and a route on this app!',
		img: game
	},
	{
		id: 2,
		name: 'StuffILike',
		repo: 'github.com/StuffILike',
		link: './victorykeeper',
		newTab: true,
		description: "A reddit clone built for my own posting of various links I've curated",
		stack: {
			frontend: 'React and Nextjs built with typescript',
			db: 'PGSql, Redis for cache',
			backend: 'Node with Graphql APIs',
			host: 'Hosted on Netlify'
		},
		img: game
	},
	{
		id: 3,
		name: 'TrainOpener',
		repo: 'github.com/trainopener',
		link: './trainopener',
		newTab: false,
		description:
			'Built by and for myself to train various chess openings against particular lines.',
		stack: {
			frontend: 'Svelte with custom css components',
			db: 'Simple JS files',
			backend: 'Node',
			host: 'Hosted on Netlify, and a route on this app'
		},
		img: chess
	}
];

export default projects;
