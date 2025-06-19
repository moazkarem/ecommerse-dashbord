export const formatedDate = (dateInput) => {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-GB");
};
