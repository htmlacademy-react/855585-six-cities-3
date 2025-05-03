import { TReview } from '../types/treview';

export const reviews: TReview[] =
[
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '2',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Angelina Honer',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'A peaceful, charming, and scenic city that rests beside a river, enveloped by the distinct serenity of Amsterdam\'s light.',
    rating: 5
  }
];
