"use client";

import { useRouter } from "next/navigation";

export default function GoProductsBtn() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/products")}>제품 페이지로 가기</button>
  );
}
