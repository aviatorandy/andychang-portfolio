export function getProjectImageStyles(image: string) {
  if (image.includes("omnicell")) {
    return {
      container: "bg-[#0d2818]",
      img: "object-contain p-8",
    };
  }
  if (image.includes("review-intelligence")) {
    return {
      container: "bg-neutral-950",
      img: "object-cover object-top",
    };
  }
  if (image.includes("sahara-cloud")) {
    return {
      container: "bg-neutral-900",
      img: "object-cover object-top",
    };
  }
  return {
    container: "bg-neutral-100",
    img: "object-cover object-top",
  };
}
