// - 아래의 `App.jsx` 파일을 `Header.jsx`, `Content.jsx`, `Footer.jsx` 세 개의 파일로 분리하세요.
// - 분리한 후, `Header` 컴포넌트로 `title` props를 전달하여 제목을 설정하세요.
// - `Footer` 컴포넌트로 `year` props를 전달하여 연도를 설정하세요.

import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  const title = "My Website";
  const year = new Date().getFullYear();

  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer year={year} />
    </div>
  );
}

export default App;
