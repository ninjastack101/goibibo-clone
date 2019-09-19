export const FETCH_CITIES = 'FETCH_CITIES';
export const SET_CITIES = 'SET_CITIES';
export const VALIDATE_SEARCH_DETAILS = 'VALIDATE_SEARCH_DETAILS';
export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

const initialState = {
  selectedCityId: '',
  list: [],
  errorMessage: '',
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case RESET_ERROR_MESSAGE: {
      const errorMessage = '';
      return {
        ...state, errorMessage,
      };
    }
    case FETCH_CITIES: {
      return { ...state };
    }
    case SET_CITIES: {
      const list = action.data;
      return {
        ...state, list,
      };
    }
    case VALIDATE_SEARCH_DETAILS: {
      return {
        ...state,
      };
    }
    case SET_ERROR: {
      const errorMessage = action.data;
      return {
        ...state, errorMessage,
      };
    }
    default:
      return state;
  }
};
