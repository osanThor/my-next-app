import Link from "next/link";

const products = [
  { name: "셔츠", link: "shirts" },
  { name: "팬티", link: "pants" },
  { name: "스커트", link: "skirt" },
  { name: "신발", link: "shoes" },
];

const ProductsPage = () => {
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
