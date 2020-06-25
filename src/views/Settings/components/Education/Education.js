import React, { useState } from 'react';
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

const useStyles = makeStyles(() => ({
  root: {}
}));

const Password = props => {
  const { className,history, ...rest } = props;
 

  const classes = useStyles();
  
  const [values, setValues] = useState({
    companyName: '',
    subject: '',
    description:'',
    from:new Date('2016-08-18T21:11:54'),
    to:new Date('2020-08-18T21:11:54')
  });
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  
  const [canIRedirect, setRedirect] = useState(false);
  const { subject,description,companyName,from,to} = values;

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
  console.log(data)
    
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
      
      <form>
        <CardHeader
          subheader="Latest Education"
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
        </CardActions>
      </form>
    </Card>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
