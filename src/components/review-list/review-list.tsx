import { useAppSelector } from '../../store';
import Review from '../review/review';
import { getReviews } from '../../store/selectors';

function ReviewList() {
  const reviews = useAppSelector(getReviews);
  const limitedReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <ul className="reviews__list">
      {limitedReviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;
