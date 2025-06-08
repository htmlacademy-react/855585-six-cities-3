import { useAppSelector } from '../../store';
import Review from '../review/review';

function ReviewList() {
  const reviews = useAppSelector((state) => state.offersData.offerComments);

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;
