import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import FormControlLabels from '../../FormControlLabels/FormControlLabels';
import Collapsible from '../../Collapsible/Collapsible';

const PriceFilter = (props) => {
  const { priceFilters, handleChange, reset } = props;
  const data = [
    {
      control: <Checkbox checked={priceFilters.lt2000} onChange={handleChange('lt2000')} value={2000} />,
      label: 'Upto Rs. 2000',
    },
    {
      control: <Checkbox checked={priceFilters['2000bt4000']} onChange={handleChange('2000bt4000')} value={4000} />,
      label: 'Rs. 2000 to Rs. 4000',
    },
    {
      control: <Checkbox checked={priceFilters.gt4000} onChange={handleChange('gt4000')} value={3} />,
      label: 'Rs 4000+',
    },
  ];
  return (
    <Collapsible
      header={(
        <div>
          Price Rating
          <Button onClick={() => reset('price')}>Reset</Button>
        </div>
      )}
    >
      <FormControlLabels ControlLabels={data} />
    </Collapsible>
  );
};

PriceFilter.propTypes = {
  priceFilters: PropTypes.objectOf(PropTypes.any).isRequired,
  reset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PriceFilter;
