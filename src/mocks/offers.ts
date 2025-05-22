import { TOffer } from '../types/toffer';
import { getRandomUrl } from '../utils';


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
      isPremium: false,
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
        name: 'Paris',
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
        name: 'Cologne',
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
    {
      id: '5',
      title: 'Modern studio with canal view in city center',
      type: 'apartment',
      price: 135,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3809553943508,
          longitude: 4.86709666406198,
          zoom: 10
        }
      },
      location: {
        latitude: 52.3809553943508,
        longitude: 4.86709666406198,
        zoom: 8
      },
      isFavorite: true,
      isPremium: true,
      rating: 5,
      previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      description: 'Stylish studio with panoramic windows and canal view',
      bedrooms: 2,
      goods: [
        'Free Wi-Fi', 'Private bathroom', 'Room service', 'Mini-bar', 'Ocean view', 'King-size bed', 'Complimentary breakfast', '24-hour front desk'
      ],
      host: {
        name: 'James Hetfield',
        avatarUrl: 'https://cataas.com/cat?width=300&height=300&random=',
        isPro: true
      },
      images: [
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random='
      ],
      maxAdults: 5
    },
    {
      id: '6',
      title: 'Charming loft with vintage decor in downtown',
      type: 'apartment',
      price: 110,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3749553943508,
          longitude: 4.86909666406198,
          zoom: 10
        }
      },
      location: {
        latitude: 52.3749553943508,
        longitude: 4.86909666406198,
        zoom: 8
      },
      isFavorite: true,
      isPremium: false,
      rating: 4,
      previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      description: 'Spacious loft with cozy vibes and retro furnishings',
      bedrooms: 2,
      goods: [
        'Free Wi-Fi', 'Private bathroom', 'Room service', 'Mini-bar', 'Ocean view', 'King-size bed', 'Complimentary breakfast', '24-hour front desk'
      ],
      host: {
        name: 'James Hetfield',
        avatarUrl: 'https://cataas.com/cat?width=300&height=300&random=',
        isPro: true
      },
      images: [
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random='
      ],
      maxAdults: 3
    },
    {
      id: '7',
      title: 'Cozy city-view apartment near park',
      type: 'apartment',
      price: 95,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3869553943508,
          longitude: 4.86209666406198,
          zoom: 10
        }
      },
      location: {
        latitude: 52.3869553943508,
        longitude: 4.86209666406198,
        zoom: 8
      },
      isFavorite: true,
      isPremium: true,
      rating: 3,
      previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      description: 'Comfortable apartment with a view of the park and skyline',
      bedrooms: 2,
      goods: [
        'Free Wi-Fi', 'Private bathroom', 'Room service', 'Mini-bar', 'Ocean view', 'King-size bed', 'Complimentary breakfast', '24-hour front desk'
      ],
      host: {
        name: 'James Hetfield',
        avatarUrl: 'https://cataas.com/cat?width=300&height=300&random=',
        isPro: true
      },
      images: [
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random='
      ],
      maxAdults: 6
    },
    {
      id: '8',
      title: 'Minimalist apartment close to main square',
      type: 'apartment',
      price: 105,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3759553943508,
          longitude: 4.86009666406198,
          zoom: 10
        }
      },
      location: {
        latitude: 52.3759553943508,
        longitude: 4.86009666406198,
        zoom: 8
      },
      isFavorite: true,
      isPremium: true,
      rating: 2,
      previewImage: getRandomUrl('https://cataas.com/cat?width=300&height=200&random='),
      description: 'Elegant space with minimalist design, steps from central square',
      bedrooms: 2,
      goods: [
        'Free Wi-Fi', 'Private bathroom', 'Room service', 'Mini-bar', 'Ocean view', 'King-size bed', 'Complimentary breakfast', '24-hour front desk'
      ],
      host: {
        name: 'James Hetfield',
        avatarUrl: 'https://cataas.com/cat?width=300&height=300&random=',
        isPro: true
      },
      images: [
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random=',
        'https://cataas.com/cat?width=300&height=200&random='
      ],
      maxAdults: 2
    }
  ];

export const favoriteOffers: TOffer[] = offers.filter((item) => item.isFavorite);
