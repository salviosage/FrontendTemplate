import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';

import { Notifications, Password,Experience, Education } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Notifications />
        </Grid>
        {/* <Grid
          item
          md={4}
          xs={12}
        >
          <Education />
        </Grid> */}
        <Grid
          item
          md={6}
          xs={12}
        >
          <Password />
        </Grid>
        <Button
            color="primary"
            variant="outlined"
            href="/account"
          >
            Next
          </Button >
      </Grid>
    </div>
  );
};

export default Settings;
