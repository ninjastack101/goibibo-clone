export const SET_CITY_ID = 'SET_CITY_ID';
export const FETCH_CITIES = 'FETCH_CITIES';
export const CLEAR_CITY_STATE = 'CLEAR_CITY_STATE';
export const SET_CITIES = 'SET_CITIES';

const initialState = {
  selectedCityId: '',
  cityList: [],
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_CITY_ID: {
      const selectedCityId = action.data;
      return {
        ...state, selectedCityId,
      };
    }
    case CLEAR_CITY_STATE: {
      return { ...initialState };
    }
    case FETCH_CITIES: {
      return { ...state };
    }
    case SET_CITIES: {
      const cityList = action.cities;
      return {
        ...state, cityList: cityList
      }
    }
    default:
      return state;
  }
};