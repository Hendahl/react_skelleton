/**
 * @author lars.hendahl@gmail.com,
 */

import PropTypes from 'prop-types';
import React from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  //FormattedRelative,
  //FormattedTime
} from 'react-intl'
import Typography from '@material-ui/core/Typography';

class Translation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          style={{ marginBottom: '4rem' }}
          variant='headline'
        >
          <FormattedMessage defaultMessage={`Translation to English`} id={'Translation_language'}/>
        </Typography>
        <Typography
          gutterBottom
          variant='body1'
        >
          <FormattedMessage defaultMessage={`You can change your browser language between English - Swedish to see the translation take effect`} id={'Translation_description'}/>
        </Typography>
        <Typography
          gutterBottom
          variant='body1'
        >
            <FormattedDate value={new Date(1459832991883)}/>
        </Typography>
        <Typography
          gutterBottom
          variant='body1'
        >
          <FormattedNumber value={1000}/>
        </Typography>

      </div>
    );
  }
}

Translation.contextTypes = {
  intl: PropTypes.object.isRequired
};

export { Translation as default };


/*
<ul>
  <li>
    <h5>FormattedMessage</h5>
    <p>

    </p>
  </li>
  <li>
    <h5>FormattedDate</h5>
    <p>
      <FormattedDate value={new Date(1459832991883)}/>
    </p>
  </li>
  <li>
    <h5>FormattedTime</h5>
    <p>
      <FormattedTime value={new Date(1459832991883)}/>
    </p>
  </li>
  <li>
    <h5>FormattedRelative</h5>
    <p>
      <FormattedRelative value={Date.now()}/>
    </p>
  </li>
  <li>
    <h5>FormattedNumber</h5>
    <p>
      <FormattedNumber value={1000}/>
    </p>
  </li>
  <li>
    <h5>this.context.intl.formatMessage</h5>
    <form action='*'>
      <input placeholder={this.context.intl.formatMessage({id: 'Translation_placeholder', defaultMessage: 'placeholder'})} type='text'/>
    </form>
  </li>
</ul>
*/