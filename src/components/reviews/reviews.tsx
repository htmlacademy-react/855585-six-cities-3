import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import type { TReview } from '../../types/treview';

type ReviewsProps = {
  isAuth: boolean;
  reviews: TReview[];
}

function Reviews({isAuth, reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <ReviewList reviews={reviews}/>
      {isAuth && <ReviewForm/>}
    </>
  );
}


export default Reviews;
