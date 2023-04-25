import { getProducts } from "@/service/products";
import Link from "next/link";

const ProductsPage = () => {
  // server file (database) 에 있는 리스트
  const products = getProducts();
  return (
    <div>
      Products Page!
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <Link href={`/products/${product.link}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
