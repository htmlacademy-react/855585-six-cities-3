import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import type { ReviewType } from '../../types/treview';

type ReviewsProps = {
  isAuth: boolean;
  reviews: ReviewType[];
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
