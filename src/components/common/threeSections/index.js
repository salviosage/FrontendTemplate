import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MoneyIcon from '@material-ui/icons/Money';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  CardActionArea,
  CardMedia,
  Button ,
  IconButton,
  Container,
  Collapse,
} from '@material-ui/core';
import {  } from '@material-ui/core';


import OneItem from '../OneItem'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
  
  },
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
  },
  cardContent:{
    alignItems: 'center',
    padding:theme.spacing(20)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

const ThreeSections = props => {
const contents=[{
title: 'The Concept Of DSC',
description:'The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students,  towards employability'
},
{title: 'The Concept Of DSC',
description:'The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students,  towards employability'
},
{title: 'The Concept Of DSC',
description:'The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students,  towards employability'
}]
    const classes = useStyles();
    const { className, ...rest } = props;
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md" >
      <Grid container spacing={4} >
      {contents.slice(0, 3).map(content => (
        <Grid item  xs={12} sm={4} md={4} className={classes.cardContent}>
        <div className={classes.root2}>
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
          <Grid item >
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h4"
            >
              {content.title}
            </Typography>
            <Typography variant="body2">
            {content.description}.</Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
        </div>
    </Grid>
       ))} 
      </Grid>
      </Container>
      
                
    </>
  );
};

ThreeSections.propTypes = {
  className: PropTypes.string,
//   users: PropTypes.array.isRequired
};

export default ThreeSections;