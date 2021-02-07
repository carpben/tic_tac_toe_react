/** @jsxImportSource @emotion/react */
import React, {  } from "react";
import { useImmer } from "use-immer";
import { getArr } from "./tools/arrays";
import { PLAYER } from "./tools/players";
import { BoardState } from "./tools/types/board";
import { getResult } from "./tools/getResult";
import Result from "./components/Result";
import NextMove from "./components/NextMove";
import Board from "./components/Board";

interface State {
  board: BoardState;
  currentPlayer: PLAYER;
}

const initState: State = {
  board: getArr(3, () => getArr(3, () => undefined)),
  currentPlayer: PLAYER.player1,
};

function App() {
  const [state, setState] = useImmer(initState);

  const result = getResult(state.board);

  return (
    <div
      css={{
        width: 800,
        margin: "auto",
      }}
    >

      <NextMove player={state.currentPlayer} />

      <Board
        board={state.board}
        handleClick={(row, column) => {
          if (result !== undefined) {
            return;
          }
          setState((draftSt) => {
            draftSt.board[row][column] = draftSt.currentPlayer;
            draftSt.currentPlayer =
              draftSt.currentPlayer === PLAYER.player1
                ? PLAYER.player2
                : PLAYER.player1;
          });
        }}
      />

      <Result
        onRefresh={() => setState(() => initState)}
        result={result}
      />

    </div>
  );
}

export default App;
