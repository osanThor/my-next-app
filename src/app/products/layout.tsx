import Link from "next/link";
import { Metadata } from "next/types";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "멋진 사이트 | 멋진 제품 확인",
  description: "멋진 제품을 확인해보세요.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={styles.nav}>
        <Link href="/products/woman">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </div>
      <section className={styles.section}>{children}</section>
    </div>
  );
}
