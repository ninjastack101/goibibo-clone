import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HotelForm.css'
import { fetchCities } from '../../actions/city.actions'
import { AutoCompleteSearch } from '../AutoCompleteSearch/AutoCompleteSearch'

class HotelForm extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { cityList } = this.props;
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

                <AutoCompleteSearch options={cityList} />
                {/* <input type="text" id="gosuggest_inputL" class="form-control inputTxtLarge" placeholder="Enter City name, Area name or Hotel name" value="" autocomplete="off" role="combobox" aria-autocomplete="list" aria-owns="react-autosuggest-1" aria-expanded="false" /> */}



              </div>


            </div>


          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cities.cityList,

  }
}

export default connect(mapStateToProps, { fetchCities })(HotelForm);
