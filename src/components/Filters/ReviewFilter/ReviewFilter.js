import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import FormControlLabels from '../../FormControlLabels/FormControlLabels';
import Collapsible from '../../Collapsible/Collapsible';

const ReviewFilter = (props) => {
  const { selectedReview, handleChange, reset } = props;
  const data = [
    {
      value: 3, control: <Radio />, label: '3+', checked: selectedReview === '3',
    },
    {
      value: 3.5, control: <Radio />, label: '3.5+', checked: selectedReview === '3.5',
    },
    {
      value: 4, control: <Radio />, label: '4+', checked: selectedReview === '4',
    },
  ];
  return (
    <Collapsible
      header={(
        <div>
          Review Filter
          <Button onClick={() => reset('review')}>Reset</Button>
        </div>
      )}
    >
      <RadioGroup value={selectedReview} onChange={handleChange}>
        <FormControlLabels ControlLabels={data} />
      </RadioGroup>
    </Collapsible>
  );
};


ReviewFilter.propTypes = {
  selectedReview: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ReviewFilter;
