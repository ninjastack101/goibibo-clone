import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HotelForm.scss'
import { fetchCities, validateSearchDetails, resetErrorMessage } from '../../actions/city.actions'
import AutoCompleteSearch from '../AutoCompleteSearch/AutoCompleteSearch'
import DatePicker from '../DatePicker/DatePicker'
import GuestCountDropdown from '../GuestCountDropdown/GuestCountDropdown'
import getCountProperty from '../../utils/utils'
import { withRouter } from 'react-router-dom';

class HotelForm extends Component {
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
    this.props.resetErrorMessage();
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
    const { selectedOption, filteredOptions, checkInDate, checkOutDate, count } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className="homeContainer col-md-12 col-sm-12 col-xs-12">
        <div className="homeContainerInner" />
        <div className="blueBg homeWidgetWrap posRel">
          <div>
            <h1 className="font30 white lh1-5 searchTitle">Search Domestic &amp; International Hotels</h1>
            <div className="formWrap formhtWrap padT15">
              <h2 className="ico16 padB15 padL5 lh1-5 whiteTxtOpacity searchSubtitle">
                Find best deals across 200,000+ hotels worldwide
              </h2>
              <div className="shAutosgBox col-md-12 col-sm-11 col-xs-12 autoSuggestBox marginB10">
                <AutoCompleteSearch
                  selectedOption={selectedOption}
                  filteredOptions={filteredOptions}
                  handleChange={this.handleCityChange}
                  handleInputChange={this.handleCityInputChange}
                />
                <button className='clear-btn button orange' onClick={() => this.clearCityForm()}>Clear</button>

                <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                  <div className="width100 fl marginB10">
                    <span className="inputTxtLarge widgetCalenderTxt">
                      <DatePicker
                        date={checkInDate}
                        handleDateChange={this.handleDateChange}
                        label={"Check-in"} />
                    </span>
                    <span className="inputTxtLarge widgetCalenderTxt">
                      <DatePicker
                        date={checkOutDate}
                        handleDateChange={this.handleDateChange}
                        label={"Check-Out"} />
                    </span>
                    <div className="guest-dropdown col-md-3 col-sm-3 col-xs-12">
                      <span class="db ">Rooms:</span>
                      <div class="guest-count" onClick={this.toggleIsVisible}>
                        <i class="icon-user2 lh1-2 ico18 fl marginT2" />
                        <span id="home_textHook" class="ico15 white padT5 padL5 fl">2 Guests / 1 Room</span>
                        <i class="icon-arrow-down lh1-2 white ico12 marginT2 padT5 fr ipaddn" />
                      </div>
                      {this.state.isVisible && <GuestCountDropdown count={count} getcount={this.getcount} toggleIsVisible={this.toggleIsVisible} />}
                    </div>
                    <button onClick={this.handleSubmit} type="submit" class="city-form-button fr button orange xlarge">Get Set Go</button>
                  </div>
                </div>
              </div>
            </div>
          </div >
          {(errorMessage !== '') && <span class="alert_msg failure_msg fl">
            <b class="status_info fl">ERROR: </b>
            <span class="status_cont" id="homepageError_desc">
              Please enter a valid location
              </span>
          </span>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cities.list,
    errorMessage: state.cities.errorMessage
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchCities,
  validateSearchDetails,
  resetErrorMessage
})(HotelForm));
