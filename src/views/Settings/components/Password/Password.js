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
  TextField
} from '@material-ui/core';
import toastr from"toastr";
import { useMutation } from '@apollo/react-hooks';
import {UPDATE_PASSWORD} from '../../../../graphql/user';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Password = props => {
  const { className,history, ...rest } = props;
 

  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });
  const [canIRedirect, setRedirect] = useState(false);
  const { password,confirm} = values;

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
const [changePassword, {}] = useMutation(UPDATE_PASSWORD);

const handleSubmit = (e, logIn) => {
  e.preventDefault();
  changePassword({ variables: { input: { password}} }).then(async ({ data,error,loading }) => {
  console.log(data)
    localStorage.setItem('token', data.updatePassword.token);
    toastr.success( 'sucessfullly updated password ', {timeOut: 5000})
    setRedirect(true)

},
(error) => {console.log(error.graphQLErrors[0].message);
  toastr.error( error.graphQLErrors[0].message, {timeOut: 5000})
});
};
if (canIRedirect)return  <Redirect to="/account" />

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            name="confirm"
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={e => handleSubmit(e, changePassword)}
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
