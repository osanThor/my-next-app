type Props = {
  params: {
    slug: string;
  };
};
const PantsPage = ({ params }: Props) => {
  return <div>{params.slug}</div>;
};

export default PantsPage;
