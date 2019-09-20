export const SET_HOTEL_CRITERIAS = 'SET_HOTEL_CRITERIAS';
export const SET_HOTEL_LIST = 'SET_HOTEL_LIST';
export const SET_SELECTED_HOTEL = 'SET_SELECTED_HOTEL';
export const CLEAR_HOTEL_LIST = 'CLEAR_HOTEL_LIST';

const initialState = {
  list: [],
  hotelCriteria: {
    count: {
      room: 1,
      adult: 1,
      children: 0,
    },
    checkInDate: new Date('2019-08-18T21:11:54'),
    checkOutDate: new Date('2019-08-18T21:11:54'),
  },
  selectedHotel: {},
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CLEAR_HOTEL_LIST: {
      const list = [];
      return {
        ...state, list,
      };
    }
    case SET_HOTEL_LIST: {
      const list = action.data;
      return {
        ...state, list,
      };
    }
    case SET_SELECTED_HOTEL: {
      const selectedHotel = action.data;
      return {
        ...state, selectedHotel,
      };
    }
    case SET_HOTEL_CRITERIAS: {
      const { count, checkInDate, checkOutDate } = action.data;
      return {
        ...state,
        hotelCriteria: {
          checkInDate,
          checkOutDate,
          count,
        },
      };
    }
    default:
      return state;
  }
};
