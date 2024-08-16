import React from "react";

export function Counter({ increment, count }) {
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
