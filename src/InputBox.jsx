import React from "react";

export function InputBox({
  name,
  setName,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  add,
  update,
}) {
  return (
    <>
      <form>
        <div>
          <label>국가명</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>금메달</label>
          <input
            type='number'
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          ></input>
        </div>
        <div>
          <label>은메달</label>
          <input
            type='number'
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          ></input>
        </div>
        <div>
          <label>동메달</label>
          <input
            type='number'
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
          ></input>
        </div>
        <div>
          <button type='button' onClick={add}>
            국가추가
          </button>
          <button type='button' onClick={update}>
            업데이트
          </button>
        </div>
      </form>
    </>
  );
}
