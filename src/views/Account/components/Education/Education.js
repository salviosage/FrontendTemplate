import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
  Grid
} from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import toastr from"toastr";
import { useMutation } from '@apollo/react-hooks';
import {CREATE_EDUCATION} from '../../../../graphql/education';
import { Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { from } from 'apollo-boost';
import {useStore} from '../../../../store' ;

const useStyles = makeStyles(() => ({
  root: {}
}));

const Password = props => {
  const { className,history, ...rest } = props;
  const [{ auth }, dispatch] = useStore();
  const {user}=auth;

  const classes = useStyles();
  
  const [values, setValues] = useState({
    companyName: '',
    subject: '',
    description:'',
    from:new Date('2016-08-18T21:11:54'),
    to:new Date('2020-08-18T21:11:54')
  });
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  
  const [hided, sethide] = useState(true);
  const [educ, setEd] = useState(null);
  const { subject,description,companyName,from,to} = values;
  useEffect(() => {
    if (user){
      const authU=user.getAuthUser
      if(authU){
        setEd(
          [...authU.education],
         ); 
      }
      
     
        
    }
     
 }, [dispatch, auth]);
const handleHide=()=>{
  sethide(!hided)
}
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const handleStartDateChange = (date) => {
    setValues({
      ...values,
      from: date
    });
  };
  const handleEndDateChange = (date) => {
    setValues({
      ...values,
      to: date
    });
  };
const [createExperience, {}] = useMutation(CREATE_EDUCATION);

const handleSubmit = (e, logIn) => {
  e.preventDefault();
  createExperience({ variables: { input: { subject,companyName,description,from,to}} }).then(async ({ data,error,loading }) => {
  sethide(!hided)
    
    toastr.success( 'sucessfullly EDucation added added ', {timeOut: 5000})
    // setRedirect(true)

},
(error) => {console.log(error.graphQLErrors[0].message);
  toastr.error( error.graphQLErrors[0].message, {timeOut: 5000})
});
};
// if (canIRedirect)return  <Redirect to="/account" />

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      
      {hided?
      (
        <>
        <CardHeader
          subheader="Education Background"
          title="Education"
        />
  <Button
            color="primary"
            variant="outlined"
            onClick={e => handleHide()}
          >
            Add Education Section
          </Button >
          <Divider />
          {educ?
          (
<Stepper  orientation="vertical">
        { educ.slice(0,2).map(ex => (
          <Step key={ex._id} active={true}>
            <StepLabel>{ex.subject}</StepLabel>
            <StepContent>
              <Typography>{ex.companyName}</Typography>
              <Typography>from: {ex.from}</Typography>
               
            </StepContent>
          </Step>
        ))}
      </Stepper>
          ):(
            <p>No Education experience yet</p>
          )}
          </>
      )
      :(<form>
        <CardHeader
          subheader="Add Education Background"
          title="Education"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="School Name"
            name="companyName"
            onChange={handleChange}
            type="text"
            value={values.companyName}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="text"
            value={values.subject}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="text"
            value={values.decription}
            variant="outlined"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          name="from"
          value={from}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Up to"
          name="to"
          format="MM/dd/yyyy"
          value={to}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={e => handleSubmit(e, createExperience)}
          >
            Update
          </Button >
          <Button
            variant="outlined"
            onClick={e => handleHide()}
          >
            Cencel
          </Button >
        </CardActions>
      </form>)}
      
    </Card>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
