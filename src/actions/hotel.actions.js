import { SET_HOTEL_LIST, SET_HOTEL_CRITERIAS } from '../reducers/hotel';

export const setHotelCriterias = (data) => ({ type: SET_HOTEL_CRITERIAS, data });
export const setHotelList = (data) => ({ type: SET_HOTEL_LIST, data });
