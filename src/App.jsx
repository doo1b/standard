// - 아래의 `App.jsx` 파일을 `Header.jsx`, `Counter.jsx`, `Content.jsx`, `Footer.jsx`, `Status.jsx` 다섯 개의 파일로 분리하세요.
// - `App` 컴포넌트에서 `count`라는 `state`를 관리하고, 이 값을 `Counter` 컴포넌트와 `Status` 컴포넌트에 `props`로 전달하세요.
// - `Counter` 컴포넌트는 `increment` 함수를 사용해 `count`를 증가시킬 수 있어야 합니다.
// - `Status` 컴포넌트는 `count` 값에 따라 메시지를 동적으로 표시합니다.
// - `Header` 컴포넌트로 `title` props를 전달하여 제목을 설정하세요.
// - `Footer` 컴포넌트로 `year` props를 전달하여 연도를 설정하세요.

import React, { useState } from "react";
import { Counter } from "./Counter";
import { Status } from "./Status";

function App() {
  const [count, setCount] = useState(0);
  const title = "Counter App";
  const year = new Date().getFullYear();

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Welcome to my website!</p>

      <div>
        <Counter increment={increment} count={count} />
      </div>

      <div>
        <Status count={count} />
      </div>

      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
