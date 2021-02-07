/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { flatten } from "ramda";
import { FC } from "react";
import { BoardState } from "../tools/types/board";
import { DR } from "../tools/types/readOnly";
import Cell from "./Cell";

interface Props {
  board: BoardState;
  handleClick: (row: number, column: number) => unknown;
}

const Board: FC<DR<Props>> = (props) => {
  const { board, handleClick } = props;

  let boardNode: React.ReactNode[] = [];
  board.forEach((row, i) => {
    row.forEach((column, j) => boardNode.push());
  });

  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gridTemplateRows: "repeat(3, 200px)",
        justifyContent: "start",
      }}
    >
      {flatten(
        board.map((row, i) =>
          row.map((cell, j) => (
            <Cell
              player={board[i][j]}
              onClick={() => {
                handleClick(i, j);
              }}
            />
          ))
        )
      )}
    </div>
  );
};

export default Board;
