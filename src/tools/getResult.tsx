import { PLAYER } from "./players";
import { BoardState, CellVal } from "./types/board";
import { DR } from "./types/readOnly";

const checkLine = (line: DR<Array<CellVal>>) => {
  const firstVal = line[0];
  if (line.every((cell) => cell === firstVal)) {
    return firstVal;
  }
};

export const getResult = (
  board: DR<BoardState>
): PLAYER | undefined | "tie" => {
  let lines = [...board];

  for (let i = 0; i < 3; i++) {
    const columnLine = [];
    for (let j = 0; j < 3; j++) {
      columnLine.push(board[j][i]);
    }
    lines.push(columnLine);
  }

  const diagonal1 = [board[0][0], board[1][1], board[2][2]];
  const diagonal2 = [board[0][2], board[1][1], board[2][0]];
  lines.push(diagonal1, diagonal2);

  for (let i = 0; i < lines.length; i++) {
    const result = checkLine(lines[i]);
    if (result !== undefined) {
      return result;
    }
  }

  const allTouched = board.every((row) =>
    row.every((column) => column !== undefined)
  );
  if (allTouched) {
    return "tie";
  }
};
