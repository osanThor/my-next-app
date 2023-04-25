"use client";

import { useState } from "react";

export default function Counter() {
  console.log("안녕! - 클라이언트");

  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>증가</button>
    </>
  );
}
