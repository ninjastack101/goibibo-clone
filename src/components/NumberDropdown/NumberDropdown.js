import React from 'react';
import { range } from 'lodash';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

export default function NumberDropdown(props) {
  const {
    name,
    from,
    to,
    value,
    getcount,
  } = props;

  return (
    <form>
      <FormControl>
        <InputLabel htmlFor="count">{name}</InputLabel>
        <Select
          value={value}
          onChange={(event) => getcount(event.target.value, name)}
          inputProps={{
            name: { name },
            id: 'count',
          }}
        >
          {
            range(from, to).map((number) => (
              <MenuItem
                value={number}
                key={number}
              >
                {number}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </form>
  );
}

NumberDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  getcount: PropTypes.func.isRequired,
};
