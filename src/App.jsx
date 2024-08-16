import { useState } from "react";
import { MedalBox } from "./MedalBox";
import { InputBox } from "./InputBox";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");
  const [medals, setMedals] = useState([]);
  const allName = medals.map((m) => m.name);

  const newMedal = {
    name: name,
    gold: gold,
    silver: silver,
    bronze: bronze,
  };

  function emptyForm() {
    if (name === "" || gold === "" || silver === "" || bronze === "") {
      alert("모든 항목을 입력해주세요.");
      return true;
    } else return false;
  }

  function handleAdd() {
    if (emptyForm()) return;
    allName.includes(name)
      ? alert("해당 국가가 이미 존재합니다.")
      : setMedals((medal) => [...medal, newMedal]);
    initialize();
  }

  function handleUpdate() {
    if (emptyForm()) return;
    !allName.includes(name)
      ? alert("리스트에 없는 국가입니다.")
      : setMedals((medal) =>
          medal.map((m) => (m.name === name ? newMedal : m))
        );
    initialize();
  }

  function initialize() {
    setName("");
    setGold("");
    setSilver("");
    setBronze("");
  }

  function handleDel(name) {
    setMedals((medal) => medal.filter((m) => m.name !== name));
  }

  return (
    <div>
      <InputBox
        name={name}
        setName={setName}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        add={handleAdd}
        update={handleUpdate}
      />
      <MedalBox medals={medals} del={handleDel} />
    </div>
  );
}

export default App;
