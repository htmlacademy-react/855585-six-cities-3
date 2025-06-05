import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
type ReviewsProps = {
  isAuth: boolean;
}

function Reviews({isAuth}: ReviewsProps): JSX.Element {
  return (
    <>
      <ReviewList/>
      {isAuth && <ReviewForm/>}
    </>
  );
}


export default Reviews;
