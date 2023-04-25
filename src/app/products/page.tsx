import { getProducts } from "@/service/products";
import Link from "next/link";

export const revalidate = 3;

const ProductsPage = async () => {
  const products = await getProducts();

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
    </div>
  );
};

export default ProductsPage;
