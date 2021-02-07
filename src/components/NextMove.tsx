/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FC } from "react";
import { PLAYER, PLAYERS } from "../tools/players";
import { DR } from "../tools/types/readOnly";

interface Props {
    player: PLAYER
}

const NextMove: FC<DR<Props>> = (props)=>(
    <div
    css={{
      marginBottom: 20,
      marginTop: 10,
    }}
  >
    next Move by <strong>{PLAYERS[props.player].name}</strong>
  </div>
)

export  default NextMove