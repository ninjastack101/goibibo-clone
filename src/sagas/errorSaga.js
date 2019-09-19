import { take, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { HOTEL_LIST_URL, HOTEL_BY_CITY } from '../constants/links';
import { VALIDATE_SEARCH_DETAILS } from '../reducers/city';
import { setHotelCriterias, setHotelList } from '../actions/hotel.actions';
import { setError } from '../actions/city.actions';
import apiRequest from '../utils/Request';
import hotelParser from '../utils/parsers/hotel';

async function findErrors(data) {
  if (JSON.stringify(data) === '{}') return 'Please enter a valid location name';
  return '';
}

async function fetchHotels(cityId) {
  const requestUrl = HOTEL_BY_CITY + cityId;
  const reponse = await apiRequest(requestUrl);
  const parsedhotels = await hotelParser(reponse);
  return parsedhotels;
}

export default function* catchError() {
  while (true) {
    const action = yield take(VALIDATE_SEARCH_DETAILS);
    const message = yield call(findErrors, action.data.selectedOption);
    if (message !== '') yield put(setError(message));
    else {
      yield put(setHotelCriterias(action.data));
      yield put(push(HOTEL_LIST_URL));
      const hotels = yield call(fetchHotels, action.data.selectedOption.value);
      yield put(setHotelList(hotels));
    }
  }
}
