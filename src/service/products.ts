export function getProducts() {
  return [
    { name: "셔츠", link: "shirts" },
    { name: "팬티", link: "pants" },
    { name: "스커트", link: "skirt" },
    { name: "신발", link: "shoes" },
    { name: "드레스", link: "dress" },
  ];
}

export function getProduct(id: string) {
  return { name: "셔츠", link: "shirts" };
}
