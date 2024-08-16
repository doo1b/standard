import React from "react";
import { Counter } from "./Counter";
import { Status } from "./Status";

export function Content({ increment, count }) {
  return (
    <>
      <div>
        <Counter increment={increment} count={count} />
      </div>

      <div>
        <Status count={count} />
      </div>
    </>
  );
}
