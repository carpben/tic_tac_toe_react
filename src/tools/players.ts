export enum PLAYER {
	player1,
	player2,
}

export const PLAYERS = {
	[PLAYER.player1 as PLAYER]: {
		name: "Player 1",
		symbol: "X",
	},
	[PLAYER.player2 as PLAYER]: {
		name: "Player 2",
		symbol: "O",
	},
}
