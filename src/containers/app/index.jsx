/*
 *  Hendahl IT
 */

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Translation from '../translation';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '90%',
    maxWidth: '600px',
    minHeight: '600px',
    margin: '1rem auto',
    textAlign: 'center'
  },
  linkButton: {
    ...theme.typography.button,
    padding: theme.spacing.unit
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            color='inherit'
            variant='title'
            >
            Hendahl IT
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Paper
          className={classes.paper}
          elevation={4}
          >
          <Grid item xs={12}>
            <Grid
              className={classes.demo}
              container
              justify='center'
              spacing={16}
            >
              <Grid item>
                <Route
                  component={Home}
                  exact
                  path='/'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              className={classes.demo}
              container
              justify='center'
              spacing={16}
            >
              <Grid item>
                <Route
                  component={About}
                  exact
                  path='/about-us'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              className={classes.demo}
              container
              justify='center'
              spacing={16}
            >
              <Grid item>
                <Route
                  component={Translation}
                  exact
                  path='/translation'
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </main>
      <Grid item xs={12}>
        <Grid
          className={classes.demo}
          container
          justify='center'
          spacing={16}
          >
          <Grid item>
            <Link className={classes.linkButton} to='/'>
              Home
            </Link>
            <Link className={classes.linkButton} to='/translation'>
              Translation
            </Link>
            <Link className={classes.linkButton} to='/about-us'>
              About
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);