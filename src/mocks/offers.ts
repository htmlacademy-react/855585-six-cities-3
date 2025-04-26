import {Offers} from '../types/offers';

export const offers: Offers[] =
[
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'http://picsum.photos/300/200?r=0.0762563005163317',
    description: 'Cozy room with a large window overlooking the city skyline',
    bedrooms: 105,
    goods: ['free Wi-Fi', 'private bathroom', 'room service', 'mini-bar', 'ocean view', 'king-size bed', 'complimentary breakfast', '24-hour front desk'],
    host: {
      name: 'James Hetfield',
      avatarUrl: 'http://picsum.photos/300/200?r=0.0762563005163317',
      isPro: true,
    },
    images: ['http://picsum.photos/300/200?r=0.0762563005163317'],
    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Refined studio apartment in a fantastic location',
    type: 'room',
    price: 100,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'http://picsum.photos/300/200?r=0.0762563005163318',
    description: 'Bright suite featuring a king-size bed and modern decor',
    bedrooms: 10,
    goods: ['air conditioning', 'flat-screen TV'],
    host: {
      name: 'Ozzy Osbourne',
      avatarUrl: 'http://picsum.photos/300/200?r=0.0762563005163318',
      isPro: false,
    },
    images: [
      'http://picsum.photos/300/200?r=0.0762563005163318',
      'http://picsum.photos/300/200?r=0.0762563005163310'
    ],
    maxAdults: 3,
  },

  {
    id: '3',
    title: 'Elegant and modern studio in a top location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'New-York',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'http://picsum.photos/300/200?r=0.0762563005163316',
    description: 'Stylish room with a private balcony and ocean view',
    bedrooms: 5,
    goods: ['ocean view', 'king-size bed', 'complimentary breakfast'],
    host: {
      name: 'ertert',
      avatarUrl: 'http://picsum.photos/300/200?r=0.0762563005163316',
      isPro: true,
    },
    images: [
      'http://picsum.photos/300/200?r=0.0762563005163316',
      'http://picsum.photos/300/200?r=0.0762563005163312',
      'http://picsum.photos/300/200?r=0.0762563005163311'
    ],
    maxAdults: 2,
  },

  {
    id: '4',
    title: 'Sleek and deluxe studio in a perfect setting',
    type: 'room',
    price: 150,
    city: {
      name: 'Moscow',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'http://picsum.photos/300/200?r=0.0762563005163313',
    description: 'Elegant space with warm lighting and a comfortable workspace',
    bedrooms: 16,
    goods: ['ocean view', 'king-size bed', 'complimentary breakfast'],
    host: {
      name: 'Dave Mustaine',
      avatarUrl: 'http://picsum.photos/300/200?r=0.0762563005163313',
      isPro: true,
    },
    images: [
      'http://picsum.photos/300/200?r=0.0762563005163313',
      'http://picsum.photos/300/200?r=0.0762563005163314',
      'http://picsum.photos/300/200?r=0.0762563005163315',
    ],
    maxAdults: 4,
  },
];
