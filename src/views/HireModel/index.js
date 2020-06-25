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
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  
  FormHelperText,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  
} from '@material-ui/core';
import validate from 'validate.js';
import { useMutation } from '@apollo/react-hooks';
import {CREATE_HIRE} from '../../graphql/hire';

import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import toastr from"toastr";
import { getInitials } from 'helpers';






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
  companyUrl: {
    presence: { allowEmpty: true, message: 'is required' },
    length: {
      maximum: 50
    }
  },
  companyName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum:32
    }
  },
  companyEmail: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 32
    }
  },
  companyPhone: {
    presence: { allowEmpty: false, message: 'is required' },
    
    length: {
      maximum: 64
    }
  },
};



const HireModel= props=> {
    
    const {isOpen, reverse, handleClose,solver} = props
  const [open, setOpen] = useState(isOpen);
  const [reversed, setReversed] = useState(reverse);

 const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const setReverse=()=>{
setReversed(!reversed)
  }
  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const [hire, {}] = useMutation(CREATE_HIRE);
  const {companyEmail,companyName,companyPhone,companyUrl}= formState.values
  const handleSubmit = (e, hire) => {
    e.preventDefault();
    hire({ variables: { input: { companyEmail,companyName,companyPhone,companyUrl,solver:solver._id }} }).then(async ({ data,error,loading }) => {
      toastr.success( data.createHire.message, {timeOut: 5000})
      handleClose()
    
  },
  (error) => {console.log(
    error.graphQLErrors[0].message,
    toastr.error( error.graphQLErrors[0].message, {timeOut: 5000})
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
console.log(solver)

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <React.Fragment>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          {/* <div className={classes.paper}> */}
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        {solver? (
          <>
          {reversed?(
            
            <>
            <Avatar className={classes.avatar}>
            {solver.avatar}
        </Avatar>
        <Typography component="h1" variant="h5">
        {solver.firstName}
        </Typography>
        <Typography
              gutterBottom
              variant="body2" color="textSecondary" component="p"
            >
              {solver.bio}
            </Typography>
            <div className={classes.nameContainer}>
                        {/* <Avatar
                          className={classes.avatar}
                          src={solver.avatar}
                        >
                          {getInitials(solver.username)}
                        </Avatar> */}
                        
                
            
                      </div>
                      <form className={classes.form} onSubmit={e => handleSubmit(e, hire)}>
                      <TextField
                                className={classes.textField}
                                error={hasError('companyName')}
                                fullWidth
                                helperText={
                                  hasError('companyName') ? formState.errors.companyName[0] : null
                                }
                                label="Company name"
                                name="companyName"
                                onChange={handleChange}
                                type="text"
                                value={formState.values.companyName || ''}
                                variant="outlined"
                              />
                              <TextField
                                className={classes.textField}
                                error={hasError('companyUrl')}
                                fullWidth
                                helperText={
                                  hasError('companyUrl') ? formState.errors.companyUrl[0] : null
                                }
                                label="Company Url"
                                name="companyUrl"
                                onChange={handleChange}
                                type="text"
                                value={formState.values.companyUrl || ''}
                                variant="outlined"
                              />
                              <TextField
                                className={classes.textField}
                                error={hasError('companyEmail')}
                                fullWidth
                                helperText={
                                  hasError('companyEmail') ? formState.errors.companyEmail[0] : null
                                }
                                label="Copmany Email"
                                name="companyEmail"
                                onChange={handleChange}
                                type="text"
                                value={formState.values.companyEmail || ''}
                                variant="outlined"
                              />
                              
                             
                               <TextField
                                className={classes.textField}
                                error={hasError('companyPhone')}
                                fullWidth
                                helperText={
                                  hasError('companyPhone') ? formState.errors.companyPhone[0] : null
                                }
                                label="Company Phone "
                                name="companyPhone"
                                onChange={handleChange}
                                type="number"
                                value={formState.values.companyPhone || ''}
                                variant="outlined"
                              />
                              <div className={classes.policy}>
                                <Checkbox
                                  checked={formState.values.policy || false}
                                  className={classes.policyCheckbox}
                                  color="primary"
                                  name="policy"
                                  onChange={handleChange}
                                />
                                <Typography
                                  className={classes.policyText}
                                  color="textSecondary"
                                  variant="body1"
                                >
                                  I have read the{' '}
                                  <Link
                                    color="primary"
                                    component={RouterLink}
                                    to="#"
                                    underline="always"
                                    variant="h6"
                                  >
                                    Terms and Conditions
                                  </Link>
                                </Typography>
                              </div>
                              {hasError('policy') && (
                                <FormHelperText error>
                                  {formState.errors.policy[0]}
                                </FormHelperText>
                              )}
                              <Button
                                className={classes.signUpButton}
                                color="primary"
                                disabled={!formState.isValid}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                              >
                                Hire
                              </Button>
                              {/* <Typography
                                color="textSecondary"
                                variant="body1"
                              >
                                Have an account?{' '}
                                <Link
                                  component={RouterLink}
                                  to="/sign-in"
                                  variant="h6"
                                >
                                  Sign in
                                </Link>
                              </Typography> */}
                      </form>
                      </>
          ):(
            <div >
              <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {solver.username}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">{solver.bio}</Typography>
              <Divider />
     
      
                   <CardHeader
          subheader=" Job Experience"
          title="Experience"
        />
              {solver.experience.map(exp => (
                <div key={exp._id}>
                <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                 {exp.position}
              </Typography>
               <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="h4"
              >
               {exp.companyName}
              </Typography>
              </div>
              ))}
                      <CardHeader
          subheader="Education Experience"
          title="Education"
        />
        <Divider />
              {solver.education.map(educ => (
                <div key={educ._id}>
                <Typography
                color="textSecondary"
                variant="body1"
              >
                {educ.subject}
              </Typography>
               <Typography
               
                color="textSecondary"
                variant="h4"
              >
               {educ.companyName}
              </Typography>
              </div>
              ))}
             <Divider />
             <Button
            color="primary"
            variant="outlined"
            onClick={e => setReversed(true)}
          >
            Hire Me
          </Button >
          <Divider />
          {/* </Card> */}
          </div>  
            
          )}            
                      </>
        ):(
          <p> </p>
        )
        }
        
        
      </div>
    </Container>
          {/* </div> */}
        </Fade>
      </Modal>
          
    </React.Fragment>
  );
}


export default HireModel