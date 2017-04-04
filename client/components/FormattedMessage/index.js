import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const FormattedMsg = ({ id, defaultMessage }) => (
  <FormattedMessage {...{ id, defaultMessage }} />
);

FormattedMsg.propTypes = {
  id: React.PropTypes.string.isRequired,
  defaultMessage: React.PropTypes.string.isRequired,
};

export default injectIntl(FormattedMsg);
