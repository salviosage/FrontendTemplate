import React, { useEffect,useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import toastr from"toastr";
import { useMutation } from '@apollo/react-hooks';
import {UPDATE_USER} from '../../../../graphql/user';
import {useStore} from '../../../../store' ;
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;
  const [{ auth }, dispatch] = useStore();
  const {user}=auth;


  const classes = useStyles();

  const [values, setValues] = useState({
    firstName:'',
    lastName: '',
    email: '',
    telephone: '',
    location: '', 
    profession:'',
    degree:'',
    country:'',
    city:'',
    bio:''
  });
  const [canIRedirect, setRedirect] = useState(false);
  const {firstName,lastName,telephone,location, profession,bio,degree,country,city}= values
  
  useEffect(() => {
    if (user){
      console.log(user)
      setValues({
        ...user.getAuthUser,
      });
    }
     
 }, [dispatch, auth]);
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [updateUser, {}] = useMutation(UPDATE_USER);
  const handleSubmit = (e, updateUser) => {
    e.preventDefault();
    updateUser({ variables: { input: {firstName,lastName,telephone,location,bio, profession,degree,country,city}} }).then(async ({ data,error,loading }) => {
      toastr.success( 'all updated fields are set sucessfully ', {timeOut: 5000})
      
  },
  (error) => {console.log(error.graphQLErrors[0].message)
     toastr.error( error.graphQLErrors[0].message, {timeOut: 5000})
});
};
if (canIRedirect)return  <Redirect to="/dashboard" />
  const professionV = [
    {
      value: 'Nurse',
      label: 'Nurse'
    },
    {
      value: 'Pharmacist',
      label: 'Pharmacist'
    },
    {
      value: 'Midwife',
      label: 'Midwife'
    },
    {
      value: 'Medical Practitioner',
      label: 'Medical Practitioner'
    },
    {
      value: 'Allied Health Proffesional',
      label: 'Allied Health Proffesional'
    },
    {
      value: 'Other',
      label: 'Other'
    }
  ];
  const degreeV = [
    {
      value: 'Advanced Diploma',
      label: 'Advanced Diploma'
    },
    {
      value: 'Bachelor',
      label: 'Bachelor'
    },
    {
      value: 'Certificate(A2)',
      label: 'Certificate(A2)'
    },
    {
      value: 'Masters Degree',
      label: 'Masters Degree'
    },
    {
      value: 'PHD',
      label: 'PHD'
    },
    {
      value: 'Other',
      label: 'Other'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate onSubmit={e => handleSubmit(e, updateUser)}
      >
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Bio"
                margin="dense"
                name="bio"
                onChange={handleChange}
                required
                value={values.bio}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="telephone"
                onChange={handleChange}
                type="number"
                value={values.telephone}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select profession"
                margin="dense"
                name="profession"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.profession}
                variant="outlined"
              >
                {professionV.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField> */}
            {/* </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select degree"
                margin="dense"
                name="degree"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.degree}
                variant="outlined"
              >
                {degreeV.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

