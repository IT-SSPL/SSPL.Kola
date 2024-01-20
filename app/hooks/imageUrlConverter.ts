export const imageUrlConverter = (url: string) => {
  if (!url) return "";
  const webpUrl = url.replace(/(png|jpg|jpeg|svg)/, "webp");

  return webpUrl;
};
