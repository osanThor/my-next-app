import GoProductsBtn from "@/components/GoProductsBtn";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}
const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // notFound();
  }
  return (
    <>
      <div>{product.name} 제품 페이지</div>
      <Image
        src={`/images/${product.image}`}
        alt="product"
        width={300}
        height={300}
      />
      <GoProductsBtn />
    </>
  );
};

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 잇게 해줄거임(ssg)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default ProductPage;
