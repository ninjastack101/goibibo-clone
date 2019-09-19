import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoCompleteSearch from '../AutoCompleteSearch/AutoCompleteSearch'
import DatePicker from '../DatePicker/DatePicker'
import { fetchCities, validateSearchDetails, resetErrorMessage } from '../../actions/city.actions'
import GuestCountDropdown from '../GuestCountDropdown/GuestCountDropdown'
import getCountProperty  from '../../utils/utils'
import './HorizontalSearchbar.scss'

class HorizontalSearchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {},
      filteredOptions: [],
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
  componentDidMount() {
    this.props.fetchCities();
  }

  handleCityChange = option => {
    this.setState({
      selectedOption: option
    });
  };

  handleCityInputChange = (input) => {
    // this.props.resetErrorMessage();
    if (input.length < 3)
      this.setState({ filteredOptions: [] });
    else {
      this.setState({
        filteredOptions: this.props.cityList.filter(
          options => options.label
            .toLowerCase()
            .includes(input.toLowerCase()))
      });
    }
  }

  clearCityForm = () => {
    this.setState({
      selectedOption: {}
    });
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

  handleSubmit = () => {
    const { selectedOption, count, checkInDate, checkOutDate } = this.state;
    this.props.validateSearchDetails({
      selectedOption: selectedOption,
      count: count,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    })
  }

  render() {
    const {
      selectedOption,
      filteredOptions,
      checkInDate,
      checkOutDate,
      count } = this.state;
    return (
      <div class="searchWrapOuterBox bgBlue fl width100">
        <div class="searchInnerBox">
          <div class="col-md-12 col-sm-12 col-xs-12 pad0">
            <div class="col-lg-5 col-md-4 col-sm-12 col-xs-12 autoSuggestBox">
              <AutoCompleteSearch
                selectedOption={selectedOption}
                filteredOptions={filteredOptions}
                handleChange={this.handleCityChange}
                handleInputChange={this.handleCityInputChange}
                clearState={this.clearCityForm}
              />
              <button className='hz-form-btn button orange' onClick={() => this.clearCityForm()}>Clear</button>

            </div>
            <div class="col-lg-3 col-md-3 col-sm-5 col-xs-12">
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
            <div className="width15 fl">
              <span class="db">Rooms:</span>
              <div class="guest-count" onClick={this.toggleIsVisible}>
                <i class="icon-user2 lh1-2 ico18 fl marginT2" />
                <span id="home_textHook" class="ico15 white padT5 padL5 fl">2 Guests / 1 Room</span>
                <i class="icon-arrow-down lh1-2 white ico12 marginT2 padT5 fr ipaddn" />
              </div>
              {this.state.isVisible && <GuestCountDropdown count={count} getcount={this.getcount} toggleIsVisible={this.toggleIsVisible} />}
            </div>
            <button onClick={this.handleSubmit} type="submit" class="hz-form-submit button orange xlarge">Get Set Go</button>
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cities.list,
    errorMessage: state.cities.errorMessage
  }
}

export default connect(mapStateToProps, {
  fetchCities,
  validateSearchDetails,
  resetErrorMessage
})(HorizontalSearchbar);