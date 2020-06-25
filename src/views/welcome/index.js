import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from "../../assets/images/logo.svg";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  
  FormHelperText,
  Paper

  
} from '@material-ui/core';
import validate from 'validate.js';
import { useMutation } from '@apollo/react-hooks';
import {SIGN_UP} from '../../graphql/user';

import { Link as RouterLink, withRouter } from 'react-router-dom';

import africadigital from "../../assets/images/africadigital.svg";
import banner from "../../assets/images/banner.png";
import weTrain from "../../assets/images/weTrain.svg"
import about_solvers from "../../assets/images/about-solvers.svg"
import dic from "../../assets/images/dic.png"
import shaka from "../../assets/images/shaka.png"
import lpr from "../../assets/images/lpr.png"
import uplus from "../../assets/images/u+.png"
import ictCh from "../../assets/images/txper.png"
import contact_us_bg from "../../assets/images/contact-us-bg.svg"




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heightAuto:{
    height:'auto',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  customHei:{
 height: '650px',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
 
}));
const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  username: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum:10
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  telephone: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 12
    }
  }
};



const Album= props=> {
  const [open, setOpen] = useState(false);
  const [toRedirect, setRedirect] = useState(false);

  const handleOpenAdmin = () => {
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        role:"ADMIN"   
      },
      
    }));
    setOpen(true);
  };
  const handleOpenSolver = () => {
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        role:"STUDENT"   
      },
      
    }));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const [logIn, {}] = useMutation(SIGN_UP);
  const {email,firstName,lastName,password,telephone,role,username}= formState.values
  const handleSubmit = (e, logIn) => {
    console.log(formState.values)
    e.preventDefault();
    logIn({ variables: { input: { email,firstName,lastName,role,password,username,telephone }} }).then(async ({ data,error,loading }) => {
      history.push('/');
  },
  (error) => {console.log(error.graphQLErrors
    [0].message
    )});
};
  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleSignUp = event => {
    event.preventDefault();
    
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${africadigital })` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={africadigital } alt='solve it ' />}
      <div className={classes.overlay} />
      {/* <div id="index-banner" class="parallax-container" >
    <div class="container">
      <div class="row">
        <div class="col s12 m6 cmp-info">
          
          <h4 class="cmp-hdr">We Shall Recruit For Your Industry Experts</h4>
          <p>
            SOLVIT AFRICA is a provider of outsourcing, 
            offshoring, and high-value talent recruitment 
            for companies and institutions of all shapes 
            and sizes while identifying skills gaps among 
            the youth and training them to be globally 
            competitive and skilled.

          </p>
          <div>
             <a href='/solvers'> <button className="home-hire-button">Hire</button></a>
          </div>
        </div>
      </div>
    </div>
     </div> */}
      <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <div className="intro_to_solveIt">
          <h1 className="intro-header">We Shall Recruit For</h1>
          <div>
              <h4 className="intro-subheader">
              Your Industry Experts 
              </h4>
              <p className="intro-info">
              SOLVIT AFRICA is a provider of outsourcing, 
            offshoring, and high-value talent recruitment 
            for companies and institutions of all shapes 
            and sizes while identifying skills gaps among 
            the youth and training them to be globally 
            competitive and skilled.

              </p>
          </div>
          <div>
             <a href='/solvers'> <button className="home-hire-button">Hire</button></a>
          </div>
       </div>
      </div>
    </div>
    
  </div>
      {/* <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h4" variant="h4" color="inherit" gutterBottom className="cmp-hdr">
              Solve It 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              we do this for the gigs
            </Typography >
            <Link variant="subtitle1" href="#">
              learn more 
            </Link>
          </div>
        </Grid>
      </Grid> */}
    </Paper>


  <div className="containerr" id="about_solvers">
    <div className="section">
      <div className="row" id="whoWeAre">
        <div className="col s12 m6">
          
          <div>
            <img src={banner} className="responsive-img" alt="data"/>
          </div>
        </div>

        <div className="col s12 m6" id="whoWeAre-content">
          <div className="icon-lock">
            <h2 className="whoWeAre-header">Who We are</h2> 
            <p className="whoWeAre-block">
              SOLVIT AFRICA is a provider of outsourcing,
              offshoring, and high-value talent recruitment
              for companies and institutions of all shapes
              and sizes while identifying skills gaps among
              the youth and training them to be globally 
              competitive and skilled.
              </p>
              <button className="to-about-us"><a href="/about">Read more about Us</a> </button>
          </div>
        </div>
      </div>

    </div>
  </div>

<Paper style={{ backgroundImage: `url(${weTrain })`, height: 'auto' }}>
<div className="parallax-container valign-wrapper" style={{height: 'auto'}}>
    <div className="section no-pad-bot">
      <div className="container-fluid">
        <div className="row">
          <div className="col s12 m5">
            <div className="our-porgram">
                <h3 className="our-program-header">Our Program</h3>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisci
                      ng elit. Nunc imperdiet aliquet convallis. Curabitur q
                      uam orci, facilisis sed ultrices ut, accumsan et ex
                      .Pellentesque habitant morbi tristique senectus et n
                      etus et malesuada fames ac turpis egestas. Ut est lib
                      ero, tempus id augue at, sagittis dapibus felis. Phasellus  ...
                  </p>

                  <button className="our-program-read-more"><a style={{color:'#FBB13C'}} href="/programs">Read more</a></button>
            </div>
          </div>

          <div className="col s6 m6 pgrm-details">
              <div className="row" id="p-content">
                  <div className="col s8 m6">
                    <div className="Pp-content">
                      <h5>Outsourcing and offshoring</h5>
                      <p>
                        While many global businesses are being established in Africa and Rwanda in particular, 
                        they do not immediately have access to skilled employees. We outsource tech and 
                        business talent in Rwanda for businesses wherever they are across the world 
                        while creating viable solutions to many operational issues.
                      </p>
                    </div>
                  </div>
                  <div className="col s8 m6">
                    <div className="Pp-content">
                      <h5>Hands on Skills</h5>
                      <p>
                        While many global businesses are being established in Africa and Rwanda in particular, 
                        they do not immediately have access to skilled employees. We outsource tech and 
                        business talent in Rwanda for businesses wherever they are across the world 
                        while creating viable solutions to many operational issues.
                      </p>
                    </div>
                  </div>
              </div>
              <div className="row" id="p-content">
                <div className="col s8 m6">
                  <div className="Pp-content">
                    <h5>Skills Development</h5>
                    <p>
                      While many global businesses are being established in Africa and Rwanda in particular, 
                      they do not immediately have access to skilled employees. We outsource tech and 
                      business talent in Rwanda for businesses wherever they are across the world 
                      while creating viable solutions to many operational issues.
                    </p>
                  </div>
                </div>
                <div className="col s8 m6">
                  <div className="Pp-content">
                    <h5>Engiinering Skills Development</h5>
                    <p>
                      While many global businesses are being established in Africa and Rwanda in particular, 
                      they do not immediately have access to skilled employees. We outsource tech and 
                      business talent in Rwanda for businesses wherever they are across the world 
                      while creating viable solutions to many operational issues.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Paper>
  

  <div className=" container container-solvers">
    <div className="section">
      <div className="row" id="see-solver">
        <div className="col s12 m6" id="solver-content-img">
            <img src={about_solvers} className="responsive-img" alt="solvers"/>
        </div>
        <div className="col s12 m6" id="solver">
          <div className="solver-content">
            <h4 className="who-is-solver-header">Who Is Solver</h4>
            <p className="who-is-solver-paragrf">
                A solver is high trained member ready to 
                solve and kind of problem with experiances
                A solver is high trained member ready to 
                solve and kind of problem with experiances
                A solver is high trained member ready to 
                solve and kind of problem with experiances
                A solver is high trained member ready ...
            </p>
            <a  href="/sign-up"><button className="join-solver-FHome">Join</button> </a>
          </div>
        </div>
      </div>

    </div>
  </div>
  <Container maxWidth="md" id="parterners">
  
          <div className="row">
            <h4>Partern With</h4>
          </div>
          <div className="row" id="partern-content">
            <div className="col s12 m2">
              <img src={ictCh} className="responsive-img" alt="pt-ict-chamber"/>
            </div>
            <div className="col s12 m2">
            <img src={shaka}className="responsive-img" alt="ptr-wda"/>
            </div>
            <div className="col s12 m2">
              <img src={lpr} className="responsive-img" alt="ptr-reb"/>
            </div>
            <div className="col s12 m2">
              <img src={uplus} className="responsive-img" alt="ptr-shaka-ai"/>
            </div>
            <div className=" col s12 m2">
              <img src={dic} className="responsive-img" alt="ptr-shaka-ai"/>
            </div>
          </div>
      </Container>
{/* <Paper style={{ backgroundImage: `url(${contact_us_bg })`}}  >
<div className="parallax-container ">
  <div className="row center" id="contact-us-data-form">
    <div className="section">
      <div className="col s12 m6">
          <div className=" contact-information">
            <form action="" >
              <div className="row">
                <div className="input-field col s6">
                  <label htmlFor="user-name">* Name</label>
                  <input type="text" placeholder="Type your name" id="user-name" className="validate"/>
                </div>
                <div className="input-field col s6">
                  <label htmlFor="user-email">* Email</label>
                  <input type="email" placeholder="type your email" id="user-email"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <label htmlFor="phone-number">* phone number</label>
                  <input type="text" placeholder="phone number" className="validate" id="phone-number"/>
                </div>

                <div className="input-field col s6">
                  
                  <label htmlFor="text-area"> your comment</label>
                  <textarea name="" id="textarea2" className="materialize-textarea" data-length="150" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div>
                <button className="info-submit">submit</button>
              </div>
              
            </form>
          </div>
      </div>
    </div>
  </div>
  
</div>
</Paper> */}
    
      {/* <main>
      
        <div >
          <Container maxWidth="md" className="guider">
          <img className="img-fluid center" src={logo} alt="logo"/>
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
            Welcome to solveit 
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            
                      this link take you from <a href="http://solveitafrica.com/">solveitafrica portal </a>
                      to solver dashoard for testing Reason Wish to continue ?
                      log in as admin click on "test as admin" or "test as user" use providen login details.
                    
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleOpenSolver}>
                    Test as solver
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={handleOpenAdmin}>
                    Test as Admin
                  </Button>
                </Grid>
              </Grid>
            </div>
            
          </Container>
        </div>
        
      </main> */}
    </React.Fragment>
  );
}


export default Album