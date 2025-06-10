import { FormEvent, Fragment, useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../store';
import { useParams } from 'react-router-dom';
import { addOfferCommentAction, fetchOfferCommentsAction } from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const [formState, setFormState] = useState({
    comment: '',
    rating: 0,
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (name === 'rating') {
      setFormState((prev) => ({ ...prev, rating: Number(value) }));
    } else if (name === 'comment') {
      if (value.length <= 300) {
        setFormState((prev) => ({ ...prev, comment: value }));
      }
    }
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      id &&
      formState.comment.length >= 50 &&
      formState.comment.length <= 300 &&
      formState.rating > 0
    ) {
      setIsSending(true);

      const actionResult = await dispatch(addOfferCommentAction({
        id,
        comment: formState.comment,
        rating: formState.rating,
      }));

      if (addOfferCommentAction.fulfilled.match(actionResult)) {
        dispatch(fetchOfferCommentsAction(id));
        setFormState({ comment: '', rating: 0 });
      }

      setIsSending(false);
    }
  };

  const isSubmitDisabled =
    formState.comment.length < 50 ||
    formState.rating === 0 ||
    formState.comment.length >= 300 ||
    isSending;

  const ratingOptions = [
    { value: 5, label: 'perfect' },
    { value: 4, label: 'good' },
    { value: 3, label: 'not bad' },
    { value: 2, label: 'badly' },
    { value: 1, label: 'terribly' },
  ];

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt) => {
        void handleSubmit(evt);
      }}
      data-testid="review-form"
    >

      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {ratingOptions.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={formState.rating === value}
              onChange={handleChange}
              disabled={isSending}
              data-testid={`rating-${value}`}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.comment}
        onChange={handleChange}
        minLength={50}
        maxLength={300}
        disabled={isSending}
        data-testid="comment-textarea"
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b> and no more than 300 characters.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
          data-testid="submit-button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
