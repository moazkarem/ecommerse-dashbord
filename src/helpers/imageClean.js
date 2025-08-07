export const imageClean = (image) => {
  if (typeof image !== "string") return image;
  const idx = image.indexOf("https", 10);

  return idx !== -1 ? image.substring(idx) : image;
};
