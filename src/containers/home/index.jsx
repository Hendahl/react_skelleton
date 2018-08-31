/**
 * @author lars.hendahl@gmail.com,
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counter'
import { push } from 'react-router-redux'
import Button from '@material-ui/core/Button'
import React from 'react'
import Typography from '@material-ui/core/Typography'

/* eslint-disable */
const Home = props => (
  <div >
    <Typography
      variant='headline'
      gutterBottom
      style={{ marginBottom: '4rem' }}
    >
      Home
    </Typography>
    <Button
      className='eButton'
      disabled={props.isIncrementing}
      onClick={props.increment}
      variant='outlined'
    >
      Increment
    </Button>
    <Button
      variant='outlined'
      onClick={props.incrementAsync}
      disabled={props.isIncrementing}
    >
      Increment Async
    </Button>
    <Button
      variant='outlined'
      onClick={props.decrement}
      disabled={props.isDecrementing}
    >
      Decrement
    </Button>
    <Button
      variant='outlined'
      onClick={props.decrementAsync}
      disabled={props.isDecrementing}
    >
      Decrement Async
    </Button>
    <Typography
      className='resultText'
      variant='display2'
      gutterBottom
      gutterBottom
      style={{ marginTop: '4rem' }}
    >
      Count: {props.count}
    </Typography>
    <Button
      variant='outlined'
      onClick={() => props.changePage()}
      style={{ marginTop: '4rem' }}
    >
      Go to about page via redux
    </Button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);