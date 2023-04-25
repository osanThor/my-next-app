import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}
const PantsPage = ({ params: { slug } }: Props) => {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  return <div>{product.link} 제품 페이지</div>;
};

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 잇게 해줄거임(ssg)
  const products = getProducts();
  return products.map((product) => ({
    slug: product.link,
  }));
}

export default PantsPage;
