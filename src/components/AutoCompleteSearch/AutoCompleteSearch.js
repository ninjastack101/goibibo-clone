import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './AutoCompleteSearch.scss';

export default function AutoCompleteSearch(props) {
  const {
    selectedOption,
    handleChange,
    handleInputChange,
    filteredOptions,
  } = props;

  return (
    <div>
      <Select
        className="city-search-input"
        value={selectedOption}
        options={filteredOptions}
        onChange={(option) => handleChange(option)}
        onInputChange={(input) => handleInputChange(input)}
      />
    </div>
  );
}

AutoCompleteSearch.propTypes = {
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  filteredOptions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectedOption: PropTypes.string.isRequired,
};

AutoCompleteSearch.defaultProps = {
  handleChange: function handleChange() {},
  handleInputChange: function handleInputChange() {},
};
