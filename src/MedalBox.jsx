import React from "react";

export function MedalBox({ medals, del }) {
  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {medals
          .sort((a, b) => b.gold - a.gold)
          .map((medal) => (
            <tr key={medal.name}>
              <td>{medal.name}</td>
              <td>{medal.gold}</td>
              <td>{medal.silver}</td>
              <td>{medal.bronze}</td>
              <td>
                <button type='button' onClick={() => del(medal.name)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
