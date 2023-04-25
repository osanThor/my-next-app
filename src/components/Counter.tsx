"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>증가</button>
    </>
  );
}
