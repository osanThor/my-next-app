import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

const ProductsPage = async () => {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // next: { revalidate: 0 },
    // cache: "no-store",
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <div>
      Products Page!
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </div>
  );
};

export default ProductsPage;
