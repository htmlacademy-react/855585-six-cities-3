import { ReviewType } from '../../types/review';
import { stylizesRating } from '../../utils';

type ReviewProps = {
  review: ReviewType;
}

function formatReviewDate(dateString: string): { displayDate: string; dateTimeAttr: string } {
  const date = new Date(dateString);
  const displayDate = date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const dateTimeAttr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  return { displayDate, dateTimeAttr };
}

function Review({ review }: ReviewProps): JSX.Element {
  const { displayDate, dateTimeAttr } = formatReviewDate(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: stylizesRating(review.rating) }}></span>
            <span className="visually-hidden">{review.rating}</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={dateTimeAttr}>
          {displayDate}
        </time>
      </div>
    </li>
  );
}

export default Review;

