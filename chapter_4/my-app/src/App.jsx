import { useEffect, useState } from "react";
import { ColorMessage } from "./components/ColoredMessage";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert();
  }, [num]);
  

  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    setNum((prev) => prev+1);
  }

  return (
  <>
    <h1 style={{ color: "red" }}>こんにちは！</h1>
    <ColorMessage color="blue">お元気ですか？</ColorMessage>
    <ColorMessage color="pink">元気です！</ColorMessage>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
  </>
  );
};