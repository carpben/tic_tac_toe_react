/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { getResult } from "../tools/getResult";
import { PLAYERS } from "../tools/players";

interface Props {
  result: ReturnType<typeof getResult>;
  onRefresh: () => unknown;
}

const Result: FC<Props> = (props) => {
  const { result, onRefresh } = props;

  if (result === undefined) {
    return null;
  }

  return (
    <div
      css={{
        marginTop: 20,
        fontSize: 20,
      }}
    >
      {result === "tie" ? (
        "It's Tie"
      ) : (
        <>
          The Winner is <strong>{PLAYERS[result].name}</strong>
        </>
      )}
      <button
        onClick={onRefresh}
        css={{
          marginLeft: 20,
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Result;
