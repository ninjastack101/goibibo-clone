import { DECIMAL_BASE } from '../../constants/data';
import { flattenObject } from '../utils';

const hotelParser = (contents) => {
  let hotels = [];
  const hotelList = Object.values(JSON.parse(contents).data);
  hotels = hotelList.map((item) => {
    const hotel = {};
    const { hotel_data_node, hotel_geo_node } = item;

    hotel.id = hotel_data_node._id;
    hotel.images = flattenObject(hotel_data_node.img_selected);
    hotel.image = hotel_data_node.img_selected.fs ? hotel_data_node.img_selected.fs.l : '';
    hotel.name = hotel_geo_node.name;
    hotel.location = hotel_data_node.loc.vendor_location;
    hotel.price = hotel_data_node.extra ? parseInt(hotel_data_node.extra.check_in, DECIMAL_BASE) : 'Not exist';
    hotel.rating = hotel_data_node.extra.gir_data ? parseInt(hotel_data_node.extra.gir_data.fd_rating, DECIMAL_BASE) : 'Not exist';
    return hotel;
  });
  return hotels;
};

export default hotelParser;
