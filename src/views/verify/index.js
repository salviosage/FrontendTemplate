import React , { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import queryString from 'query-string';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useMutation } from '@apollo/react-hooks';
import {VERIFY_ACCOUNT} from '../../graphql/user';
import { Redirect } from 'react-router-dom';
import toastr from"toastr";





const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Verify = props => {
 
  const { location: { search},history } = props;
  const { token,email} = queryString.parse(search);
  const [verify, { }] = useMutation(VERIFY_ACCOUNT);
 const classes = useStyles();
 const [canIRedirect, setRedirect] = useState(false);
  const handleVerify = () => {
    console.log('verified')
    verify({ variables: {  email,token} }).then(async ({ data,error,loading }) => {
      console.log(data)
      localStorage.setItem('token',data.verifyAccount.token);
      toastr.success( 'account verified sucessfully', {timeOut: 5000})
      setRedirect(true)
  },
  (error) => {console.log(
    error.graphQLErrors[0].message,
    toastr.error( error.graphQLErrors[0].message, {timeOut: 5000})
    )});
};
if (canIRedirect)return  <Redirect to="/settings" />

  return (
     < >
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Verify your email Address 
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleVerify}>
                    verify 
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      
   </>
  );
}
export default Verify