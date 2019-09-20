import {
  SET_HOTEL_LIST, SET_HOTEL_CRITERIAS, CLEAR_HOTEL_LIST, SET_SELECTED_HOTEL,
} from '../reducers/hotel';

export const setHotelCriterias = (data) => ({ type: SET_HOTEL_CRITERIAS, data });
export const setHotelList = (data) => ({ type: SET_HOTEL_LIST, data });
export const setSelectedHotel = (data) => ({ type: SET_SELECTED_HOTEL, data });
export const clearHotelList = () => ({ type: CLEAR_HOTEL_LIST });
