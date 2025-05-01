const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomUrl = (url: string) => `${url}${Math.random()}`;

export {capitalize, getRandomUrl};
