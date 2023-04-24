import Link from "next/link";
import styles from "./layout.module.css";

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
