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
  if (image.includes("sahara")) {
    return {
      container: "bg-neutral-900",
      img: "object-cover object-top",
    };
  }
  if (image.includes("harmonize")) {
    return {
      container: "bg-neutral-50",
      img: "object-contain p-8",
    };
  }
  return {
    container: "bg-neutral-100",
    img: "object-cover object-top",
  };
}
