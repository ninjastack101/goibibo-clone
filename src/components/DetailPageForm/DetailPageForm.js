import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from '../DatePicker/DatePicker'
import { validateSearchDetails } from '../../actions/city.actions'
import GuestCountDropdown from '../GuestCountDropdown/GuestCountDropdown'
import getCountProperty from '../../utils/utils'
import './DetailPageForm.scss'

class DetailPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      count: {
        room: 1,
        adult: 1,
        children: 0
      },
      checkInDate: new Date('2019-08-18T21:11:54'),
      checkOutDate: new Date('2019-08-18T21:11:54')
    };
  }

  handleDateChange = async (date, prop) => {
    if (prop === 'Check-in') {
      await this.setState({
        checkInDate: date
      })
    }
    else {
      await this.setState({
        checkOutDate: date
      })
    }
  }

  toggleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  getcount = async (number, prop) => {
    const countProp = getCountProperty(prop)
    await this.setState({
      count: {
        ...this.state.count,
        [countProp]: number
      },
    })
  }

  render() {
    const {
      checkInDate,
      checkOutDate,
      count } = this.state;
    const { price } = this.props
    return (
      <div class="book-form-wrapper">
        <div class="width100 fl ">
          <div class="width100 fl padTB5">
            <div class="width100 fl">
              <div class="width100 fl padT5">
                <div class="fl dib vMid">
                  <p class="ico20 fb dib vMid i-room-black">
                    <i class="icon-rupee ico14">
                    </i>
                    {price}
                  </p>
                  <p class="padT5 i-room-black ico12 padT2">per room / night</p>
                </div>
                <div class="fr dib vMid" >
                  <span class="dib vMid">
                    <i class="icon-hotels-bed ico17 i-room-black dib vMid">
                    </i></span>
                  <span class="padL5 ico14 i-room-black dib vMid">Executive Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="searchInnerBox">
          <div class="col-md-12 col-sm-12 col-xs-12 pad0">
            <div class="">
              <div class="fl width100 ">
                <div class="col-md-6 col-xs-6 ">
                  <DatePicker
                    date={checkInDate}
                    handleDateChange={this.handleDateChange}
                    label={"Check-in"} />
                </div>
                <div class="col-md-6 col-xs-6 calenderInnerBox">
                  <DatePicker
                    date={checkOutDate}
                    handleDateChange={this.handleDateChange}
                    label={"Check-Out"} />
                </div>
              </div>
            </div>
            <div className="fl">
              <span class="db">Rooms:</span>
              <div class="guest-count" onClick={this.toggleIsVisible}>
                <i class="icon-user2 lh1-2 ico18 fl marginT2" />
                <span id="home_textHook" class="ico15 white padT5 padL5 fl">2 Guests / 1 Room</span>
                <i class="icon-arrow-down lh1-2 white ico12 marginT2 padT5 fr ipaddn" />
              </div>
              {this.state.isVisible && <GuestCountDropdown count={count} getcount={this.getcount} toggleIsVisible={this.toggleIsVisible} />}
            </div>
            <div class="width100 fl padTB20">
              <div class="width50 fl">
                <p class="ico13 blak lh1-5">1 room x 1  night Excluding Taxes</p>
              </div>
              <div class="width50 fl">
                <p class="fb txtRight">
                  <i class="icon-rupee ico15">
                  </i>
                  <span class="ico20">
                    1668
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.hotels.selectedHotel.price,
  }
}

export default connect(mapStateToProps, {
  validateSearchDetails,
})(DetailPageForm);