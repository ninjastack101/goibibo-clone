import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import './DatePicker.scss';

export default function DatePicker(props) {
  const {
    label, date, handleDateChange, minDate,
  } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        minDate={minDate}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={label}
        value={date}
        onChange={(date) => handleDateChange(date, label)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  minDate: PropTypes.objectOf(PropTypes.any).isRequired,
  date: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
};
