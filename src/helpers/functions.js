export const formatedDate = (dateInput) => {
  console.log(dateInput , 'my inp')
  const date = new Date(dateInput);
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};
