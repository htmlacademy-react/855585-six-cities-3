import { useAppDispatch } from '../store';
import { toggleFavoriteOfferAction } from '../store/api-actions';

export const useToggleFavorite = () => {
  const dispatch = useAppDispatch();

  return async (offerId: string, isFavorite: boolean): Promise<boolean> => {
    const status = !isFavorite;

    try {
      const resultAction = await dispatch(toggleFavoriteOfferAction({ offerId, status }));
      return toggleFavoriteOfferAction.fulfilled.match(resultAction);
    } catch {
      return false;
    }
  };
};
