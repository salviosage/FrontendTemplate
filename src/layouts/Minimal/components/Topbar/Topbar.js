
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';


import MenuIcon from '@material-ui/icons/Menu';
import {Container,AppBar, Toolbar, Badge, Hidden,Typography,Button, IconButton,useMediaQuery} from '@material-ui/core';


import logo from "../../../../assets/images/logo.svg";
import {useState, useEffect} from 'react';
import JoinModel from '../../../../views/joinModel'
import { useQuery } from '@apollo/react-hooks';
import {GET_AUTH_USER} from '../../../../graphql/user';
import {SET_AUTH_USER} from '../../../../store/auth';
import {useStore} from '../../../../store' ;

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
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
  //   defaultMatches: true
  // });
  const [isOpen, setOpen] = useState(false);
  const handleOpen=()=>{
    setOpen(!isOpen)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const [{ auth }, dispatch] = useStore();
  const {  error, data,  networkStatus } = useQuery(
    GET_AUTH_USER,
    {
      notifyOnNetworkStatusChange: true,
    },
  );
  // const [openSidebar, setOpenSidebar] = useState(false);

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };

  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  // const shouldOpenSidebar = isDesktop ? true : openSidebar;
  useEffect(() => {
    if(data){
      dispatch({ type: SET_AUTH_USER, payload: data });
    }
    
  }, [dispatch, data]);
  if (networkStatus === 4) return 'Refetching!';
  if (error) console.log(error);
  const{isLogedIn}= auth;
    
  return (
    // <div className={classes.root}>
    //   <AppBar position="fixed" className={classes.toolBar}>
    //   <Container>
    //     <Toolbar >
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //       <a href="/" className=" left brand-logo"><img  alt="Logo"
    //        src={logo}/></a>
    //       </IconButton>
    //       <Hidden mdDown>
    //       <IconButton color="inherit">
            
    //       </IconButton>
    //       <IconButton
    //         className={classes.signOutButton}
    //         color="inherit"
    //       >
            
    //       </IconButton>
    //     </Hidden>
    //     <Hidden lgUp>
    //       <IconButton
    //         color="inherit"
    //         onClick={handleSidebarOpen}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //     </Hidden>
          
    //       <Typography variant="h6" className={classes.title}>
            
    //       </Typography>
          
    //         <Button color="inherit"><a href="/about" className="active">About Us</a></Button>
    //           <Button color="inherit"><a href="/programs" className="sb">Our Program</a></Button>
    //           <Button color="inherit"><a href="/solvers" className="sb">Solvers</a></Button>   
            
    //       <Button color="inherit"><a href="/conatct" className="sb">Contact Us</a></Button>
    //       {isLogedIn?
    //         <Button color="inherit" className="modal-trigger nav-join-button"><a href="/dashboard">Dashboard</a></Button>:
    //         <Button  onClick={handleOpen} className="modal-trigger nav-join-button">Join</Button>
    //         }
           
    //     </Toolbar>
    //     </Container>
    //   </AppBar>
    // </div>
    <div className="navbar-fixed">
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
            <a href="/" className=" left brand-logo"><img  alt="Logo"
            src={logo}/></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/about" className="active">About Us</a></li>
              <li><a href="/programs" className="sb">Our Program</a></li>
              <li><a href="/solvers" className="sb">Solvers</a></li>
              {/* <li><a href="/conatct" className="sb">Contact Us</a></li> */}
              {isLogedIn?
             <>
             <Button href="/account" className="nav-join-button"  >Jolie</Button>
             
          <IconButton color="inherit">
          <Badge
            badgeContent='41'
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={classes.signOutButton}
          color="inherit"
        >
          <InputIcon />
        </IconButton></> 
             :
             <Button onClick={handleOpen} className="modal-trigger nav-join-button">Join</Button>
            }
              
               
            </ul>
          <ul id="nav-mobile" className="sidenav">
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Our Program</a></li>
            <li><a href="solvers">Solvers</a></li>
            <li><a href="contact">Contact Us</a></li>
            {isLogedIn?
            <>
             <Button href="/join" className="nav-join-button"  >Dashboard</Button>
             
          <IconButton color="inherit">
          <Badge
            badgeContent='41'
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={classes.signOutButton}
          color="inherit"
        >
          <InputIcon />
        </IconButton></>:
            <li> <button className="nav-join-button"  ><a href="/join">Join</a></button></li>
            }
            
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <JoinModel isOpen={isOpen} handleClose={handleClose} />
    </div>
    
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};


export default Topbar;
