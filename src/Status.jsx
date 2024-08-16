import React from "react";

export function Status({ count }) {
  return <p>{count > 10 ? "High count!" : "Keep counting..."}</p>;
}
