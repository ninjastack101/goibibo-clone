import { SET_CITY_ID, CLEAR_CITY_STATE, FETCH_CITIES, SET_CITIES } from '../reducers/city';

export const fetchCities = () => ({ type: FETCH_CITIES });
export const setCities = (data) => ({ type: SET_CITIES, cities: data });

