import Link from "next/link";
import styles from "./layout.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={styles.nav}>
        <Link href="/products/여성옷">여성옷</Link>
        <Link href="/products/남성옷">남성옷</Link>
      </div>
      <section className={styles.section}>{children}</section>
    </div>
  );
}
