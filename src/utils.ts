const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomUrl = (url: string) => `${url}${Math.random()}`;
const stylizesRating = (rating?: number) => `${(100 / 5) * (rating ?? 0)}%`;
export {capitalize, getRandomUrl, stylizesRating};
