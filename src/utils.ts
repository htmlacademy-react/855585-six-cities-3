const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomUrl = (url: string) => `${url}${Math.random()}`;
const stylizesRating = (rating?: number): string => {
  if (typeof rating !== 'number' || isNaN(rating)) {
    return '0%';
  }

  const roundedRating = Math.round(Math.max(0, Math.min(rating, 5))); // Округляем в диапазоне [0, 5]
  const percent = (roundedRating / 5) * 100;

  return `${percent}%`;
};
export {capitalize, getRandomUrl, stylizesRating};
