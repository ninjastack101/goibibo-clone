import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Collapsible from '../../Collapsible/Collapsible';
import Stars from '../../Stars/Stars';
import FormControlLabels from '../../FormControlLabels/FormControlLabels';

const StarRatingFilter = (props) => {
  const { starFilters, handleChange, reset } = props;
  const data = [
    {
      control: <Checkbox checked={starFilters.five} onChange={handleChange('five')} value={5} />,
      label: <Stars count={5} />,
    },
    {
      control: <Checkbox checked={starFilters.four} onChange={handleChange('four')} value={4} />,
      label: <Stars count={4} />,
    },
    {
      control: <Checkbox checked={starFilters.three} onChange={handleChange('three')} value={3} />,
      label: <Stars count={3} />,
    },
    {
      control: <Checkbox checked={starFilters.two} onChange={handleChange('two')} value={2} />,
      label: <Stars count={2} />,
    },
    {
      control: <Checkbox checked={starFilters.one} onChange={handleChange('one')} value={1} />,
      label: <Stars count={1} />,
    },
  ];
  return (
    <Collapsible
      header={(
        <div>
          Star Rating
          <Button onClick={() => reset('star')}>Reset</Button>
        </div>
      )}
    >
      <FormControlLabels ControlLabels={data} />
    </Collapsible>
  );
};

StarRatingFilter.propTypes = {
  starFilters: PropTypes.objectOf(PropTypes.any).isRequired,
  reset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StarRatingFilter;
