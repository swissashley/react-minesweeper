import React from 'react';
import ReactDOM from 'react-dom';
import Minesweeper from './minesweeper';
import Game from './game';


document.addEventListener("DOMContentLoaded", () => {
	const root = document.querySelector("#root");
	ReactDOM.render(
		<Game />, root
	);
});
