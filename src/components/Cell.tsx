/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FC } from "react";
import { PLAYER, PLAYERS } from "../tools/players";
import { btnNormalize } from "../tools/styles";
import { DR } from "../tools/types/readOnly";

interface Props {
  player?: PLAYER;
  onClick: () => unknown;
}

const Cell: FC<DR<Props>> = (props) => {
  const { player, onClick } = props;

  return (
    <button
      onClick={onClick}
      css={[
        btnNormalize,
        {
          border: "1px solid black ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50
        },
      ]}
    >
     { player!==undefined &&  PLAYERS[player].symbol}
    </button>
  );
};

export default Cell;
