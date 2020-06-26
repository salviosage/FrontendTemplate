import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
  
}));

const OneItem = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
            <div>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </div>
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h4"
            >
              Concept of DSC
            </Typography>
            <Typography variant="body2">
                The DSC program is a grassroots channel through which Google provides
                 development skills, mobile and web development skills for students, 
                 towards employability.</Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
};

OneItem.propTypes = {
  className: PropTypes.string
};

export default OneItem;