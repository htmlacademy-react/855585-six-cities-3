import {TOffer} from '../types/toffer';
import {getRandomUrl} from '../utils';


export const offers: TOffer[] =
[
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    description: 'Cozy room with a large window overlooking the city skyline',
    bedrooms: 2,
    goods: ['Free Wi-Fi', 'Private bathroom', 'Room service', 'Mini-bar', 'Ocean view', 'King-size bed', 'Complimentary breakfast', '24-hour front desk'],
    host: {
      name: 'James Hetfield',
      avatarUrl: getRandomUrl('https://cataas.com/cat?width=300&height=300&random='),
      isPro: true,
    },
    images: [
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    ],
    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Refined studio apartment in a fantastic location',
    type: 'room',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    description: 'Bright suite featuring a king-size bed and modern decor',
    bedrooms: 1,
    goods: ['Air conditioning', 'Flat-screen TV'],
    host: {
      name: 'Ozzy Osbourne',
      avatarUrl: getRandomUrl('https://cataas.com/cat?width=300&height=300&random='),
      isPro: false,
    },
    images: [
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    ],
    maxAdults: 3,
  },

  {
    id: '3',
    title: 'Elegant and modern studio in a top location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    description: 'Stylish room with a private balcony and ocean view',
    bedrooms: 4,
    goods: ['Ocean view', 'King-size bed', 'Complimentary breakfast'],
    host: {
      name: 'David Muran',
      avatarUrl: getRandomUrl('https://cataas.com/cat?width=300&height=300&random='),
      isPro: true,
    },
    images: [
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    ],
    maxAdults: 2,
  },

  {
    id: '4',
    title: 'Sleek and deluxe studio in a perfect setting',
    type: 'room',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    description: 'Elegant space with warm lighting and a comfortable workspace',
    bedrooms: 3,
    goods: ['Ocean view', 'King-size bed', 'Complimentary breakfast'],
    host: {
      name: 'Dave Mustaine',
      avatarUrl: getRandomUrl('https://cataas.com/cat?width=300&height=300&random='),
      isPro: true,
    },
    images: [
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
    ],
    maxAdults: 4,
  },
];

export const favoriteOffers: TOffer[] = offers.filter((item) => item.isFavorite);
