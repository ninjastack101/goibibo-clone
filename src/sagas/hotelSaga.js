import { take, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SET_SELECTED_HOTEL } from '../reducers/hotel';
import { HOTEL_LIST_URL } from '../constants/links';

export default function* setHotel() {
  while (true) {
    const action = yield take(SET_SELECTED_HOTEL);
    yield put(push(HOTEL_LIST_URL + action.data.id));
  }
}
