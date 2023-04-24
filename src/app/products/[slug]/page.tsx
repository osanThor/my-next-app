import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
const PantsPage = ({ params }: Props) => {
  if (params.slug === "noting") {
    notFound();
  }
  return <div>{params.slug}</div>;
};

export function generateStateParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default PantsPage;
