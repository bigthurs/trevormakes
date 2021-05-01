import board_game from '../static/board-game.svg';
import price_tag from '../static/price-tag.svg';

const projects = [
	{
		id: 1,
		name: 'Price Quoter',
		repo: 'https://github.com/bigthurs/MERN-Price-Quoter',
		link: 'https://boiling-depths-38435.herokuapp.com/',
		newTab: true,
		description:
			'A sanitized example of an application I built at MDR Pharmacy to replace manual price quoting by internal users.',
		stack: {
			frontend: 'React with Materialize for styling',
			db: 'MongoDB with mongoose',
			backend: 'Node and Express',
			host: 'Hosted on Heroku',
		},
		img: price_tag
	},
	{
		id: 2,
		name: 'Victory Keeper',
		repo: 'github.com/victorykeeper',
		link: './victorykeeper',
		newTab: false,
		description:
			'A utility built for myself and my friends to digitalize board game vicotry point and condition tracking.',
		stack: 'Hosted on this page! Built on Svelte with Materialize for styling.',
		img: board_game
	}
];

export default projects;
