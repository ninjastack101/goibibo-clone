import {
  SET_ERROR, FETCH_CITIES, SET_CITIES, RESET_ERROR_MESSAGE, VALIDATE_SEARCH_DETAILS,
} from '../reducers/city';

export const validateSearchDetails = (data) => ({ type: VALIDATE_SEARCH_DETAILS, data });
export const fetchCities = () => ({ type: FETCH_CITIES });
export const setCities = (cities) => ({ type: SET_CITIES, data: cities });
export const setError = (message) => ({ type: SET_ERROR, data: message });
export const resetErrorMessage = () => ({ type: RESET_ERROR_MESSAGE });
