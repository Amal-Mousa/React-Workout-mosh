import React, {useState} from "react";

const Game = () => {
	const [game, setGame] = useState({
		id: 1,
		players: {
			name: "John"
		}
	});

	const handleGame = () => {
		setGame({...game, players: {...game.players, name: "Amal"}});
	};

	return (
		<div>
			{game.players.name}
			<button onClick={handleGame}>Click here</button>
		</div>
	);
};

export default Game;
