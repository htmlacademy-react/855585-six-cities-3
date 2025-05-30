import Review from '../review/review';
import { ReviewType } from '../../types/treview';

type ReviewListProps = {
  reviews: ReviewType [];
}

function ReviewList({reviews}: ReviewListProps) {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
