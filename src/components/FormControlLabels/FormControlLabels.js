import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const FormControlLabels = (props) => {
  const { ControlLabels } = props;
  return (
    <FormGroup>
      {ControlLabels.map((controlLabel) => (
        <FormControlLabel
          control={controlLabel.control}
          label={controlLabel.label}
          value={controlLabel.value}
          checked={controlLabel.checked}
          onChange={controlLabel.onChange}
        />
      ))}
    </FormGroup>
  );
};

FormControlLabels.propTypes = {
  ControlLabels: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default FormControlLabels;
