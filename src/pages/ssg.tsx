import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function SsgPage({ products }: Props) {
  return (
    <div>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
        <MeowArticle />
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
