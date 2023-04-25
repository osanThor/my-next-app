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
const PantsPage = ({ params }: Props) => {
  if (params.slug === "noting") {
    notFound();
  }
  return <div>{params.slug} 제품 페이지</div>;
};

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default PantsPage;
