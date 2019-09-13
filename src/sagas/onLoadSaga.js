import { take, put, call } from 'redux-saga/effects';
import cityParser from '../utils/parsers/city'
import { FETCH_CITY_URL } from '../constants/links';
import apiRequest from '../utils/Request'
import { FETCH_CITIES } from '../reducers/city'
import { setCities } from '../actions/city.actions'

async function fetchCities() {
  const reponse = await apiRequest(FETCH_CITY_URL)
  const parsedCities = await cityParser(reponse)
  return parsedCities
}

export default function* fetchCityOnLoad() {
  while (true) {
    yield take(FETCH_CITIES)
    const cities = yield call(fetchCities);
    yield put(setCities(cities));
  }
}