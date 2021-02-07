import { PLAYER } from "../players";

export type CellVal = PLAYER | undefined

export type BoardState = Array<Array<CellVal>>;
