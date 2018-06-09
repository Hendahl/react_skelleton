/**
 * @author lars.hendahl@gmail.com,
 */

import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = props => (
  <div>
    <Typography
      variant="headline"
      gutterBottom
      style={{ marginBottom: "4rem" }}
    >
      Home
    </Typography>
    <Button
      variant="outlined"
      onClick={props.increment}
      disabled={props.isIncrementing}
    >
      Increment
    </Button>
    <Button
      variant="outlined"
      onClick={props.incrementAsync}
      disabled={props.isIncrementing}
    >
      Increment Async
    </Button>
    <Button
      variant="outlined"
      onClick={props.decrement}
      disabled={props.isDecrementing}
    >
      Decrement
    </Button>
    <Button
      variant="outlined"
      onClick={props.decrementAsync}
      disabled={props.isDecrementing}
    >
      Decrement Async
    </Button>
    <Typography
      variant="display2"
      gutterBottom
      gutterBottom
      style={{ marginTop: "4rem" }}
    >
      Count: {props.count}
    </Typography>
    <Button
      variant="outlined"
      onClick={() => props.changePage()}
      style={{ marginTop: "4rem" }}
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
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
