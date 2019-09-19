
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const Collapsible = ({ header, children }) => (
  <FormControl component="fieldset">
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {header}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </FormControl>
);

Collapsible.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  header: PropTypes.string.isRequired,
};

export default Collapsible;
