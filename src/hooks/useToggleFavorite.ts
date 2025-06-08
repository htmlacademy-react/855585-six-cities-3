import { useAppDispatch } from '../store';
import { toggleFavoriteOfferAction, fetchOfferAction } from '../store/api-actions';

export const useToggleFavorite = (refetchAfterToggle: boolean = false) => {
  const dispatch = useAppDispatch();

  return async (offerId: string, isFavorite: boolean): Promise<boolean> => {
    const status = !isFavorite;

    try {
      await dispatch(toggleFavoriteOfferAction({ offerId, status }));

      if (refetchAfterToggle) {
        await dispatch(fetchOfferAction(offerId));
      }

      return true;
    } catch (error) {
      return false;
    }
  };
};
