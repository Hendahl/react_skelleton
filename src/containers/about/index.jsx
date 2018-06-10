/**
 * @author lars.hendahl@gmail.com,
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Logo from '../../images/LogoHit.png';

const About = () => (
  <div style={{ textAlign: 'center' }}>
    <Typography
      gutterBottom
      style={{ marginBottom: '4rem' }}
      variant='headline'
    >
      About Page
    </Typography>
    <Typography
      gutterBottom
      variant='body1'
      >
      Did you get here via Redux?
    </Typography>
    <img
      alt='logo'
      src={Logo}
      width='90%'
    />
  </div>
);

export default About;