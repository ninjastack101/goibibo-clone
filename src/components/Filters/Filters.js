import React, { Component } from 'react';
import PriceFilter from './PriceFilter/PriceFilter'
import ReviewFilter from './ReviewFilter/ReviewFilter'
import StarRatingFilter from './StarRatingFilter/StarRatingFilter'
import './Filters.css'

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedReview: '',
      starFilters: {
        five: false,
        four: false,
        three: false,
        two: false,
        one: false
      },
      priceFilters: {
        'lt2000': false,
        '2000bt4000': false,
        'gt4000': false,
      }
    }
  }

  onStarFilterChange = name => async (event) => {
    await this.setState({
      starFilters:
      {
        ...this.state.starFilters,
        [name]: event.target.checked
      }
    });
    console.log(this.state)
  };

  onPriceFilterChange = name => async (event) => {
    await this.setState({
      priceFilters:
      {
        ...this.state.priceFilters,
        [name]: event.target.checked
      }
    });
    console.log(this.state)
  };


  onReviewFilterChange = async (event) => {
    await this.setState({ selectedReview: event.target.value });
    console.log(this.state)
  }

  resetFilter = prop => {
    if (prop === 'review')
      this.setState({ selectedReview: '' });
    else if (prop === 'star')
      this.setState({
        starFilters: {
          five: false,
          four: false,
          three: false,
          two: false,
          one: false
        }
      })
    else {
      this.setState({
        priceFilters: {
          'lt2000': false,
          '2000bt4000': false,
          'gt4000': false,
        }
      })
    }
  }

  render() {
    const { starFilters, priceFilters, selectedReview } = this.state
    return (
      <div className='filter-border'>
        <div className='col-md-12'>
          <div className='filter-wrapper'>
            <ReviewFilter
              selectedReview={selectedReview}
              handleChange={this.onReviewFilterChange}
              reset={this.resetFilter} />
          </div>
          <div className='filter-wrapper'>
            <PriceFilter
              priceFilters={priceFilters}
              handleChange={this.onPriceFilterChange}
              reset={this.resetFilter} />
          </div>
          <div className='filter-wrapper'>
            <StarRatingFilter
              starFilters={starFilters}
              handleChange={this.onStarFilterChange}
              reset={this.resetFilter} />
          </div>
        </div>
      </div>

    )
  }
}

export default Filters;