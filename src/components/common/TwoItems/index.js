import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MoneyIcon from '@material-ui/icons/Money';
import {
  Card,
  Grid,
  Paper,
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
import img from "../../../assets/mi.png"


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
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/mi.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
//   paper: {
//     backgroundColor: theme.palette.warning.contrastText,
//     // border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
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
    padding:( 25 ,30)
  },
  cardGrid: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
  }
}));

const TwoSections = props => {
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
    <Paper className={classes.paper}>
    <Grid  >
      <Container className={classes.cardGrid} maxWidth="md" >
      <Grid container spacing={4} >
      <Grid item  xs={12} sm={6} md={6} >
      <div className={classes.quote}
      style={{ backgroundImage: `url(${img })`, backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center' }}
      > 
      {/* <Avatar src={img }>

      </Avatar>
      <img style={{ display: 'none' }} src={img } alt='solve it ' /> */}
      </div> 
      </Grid>
        <Grid item  xs={12} sm={6} md={6} className={classes.quoteContainer}>
        <div className={classes.root2}>
     
     
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
              variant="h1"
            >
              Mobile Development
            </Typography>
            <Typography variant="body1">
            Every year Google developers release exciting new updates to the
             world's most popular operating system. We always have sessions to keep you updated 
            and mastering the latest trends in modern Android development..</Typography>

            <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save details
          </Button>
          </Grid>
          
        </Grid>
      
    
        </div>
    </Grid>
      
      </Grid>
      </Container>
      </Grid>
                
    </Paper>
  );
};

TwoSections.propTypes = {
  className: PropTypes.string,
//   users: PropTypes.array.isRequired
};

export default TwoSections;