
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';


import MenuIcon from '@material-ui/icons/Menu';
import {Container,AppBar, Toolbar, Badge, Hidden,Typography,Button, IconButton,useMediaQuery} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
  },
  toolBar:{
    backgroundColor:"white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));





const Topbar = props => {
  const classes = useStyles();

    
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.toolBar}>
      <Container>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <a href="/" className=" left brand-logo"><img  alt="Logo"
           src=''/></a>
          </IconButton>
          <Hidden mdDown>
          <IconButton color="inherit">
            
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
           
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
          
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          
            <Button color="inherit"><a href="/about" className="active">About Us</a></Button>
              <Button color="inherit"><a href="/programs" className="sb">Our Program</a></Button>
              <Button color="inherit"><a href="/solvers" className="sb">Solvers</a></Button>   
            
          <Button color="inherit"><a href="/conatct" className="sb">Contact Us</a></Button>
         
           
        </Toolbar>
        </Container>
      </AppBar>
    </div>
   
    
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};


export default Topbar;
