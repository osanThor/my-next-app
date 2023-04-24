type Props = {
  params: {
    slug: string;
  };
};
const PantsPage = ({ params }: Props) => {
  return <div>{params.slug}</div>;
};

export function generateStateParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default PantsPage;
