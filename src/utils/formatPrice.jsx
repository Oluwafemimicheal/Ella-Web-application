export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NGN", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};