import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Shipping address
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="institution"
          name="institution"
          label="institution name"
          fullWidth
          autoComplete="institution"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="description"
          name="description"
          label="Description"
          fullWidth
          autoComplete="Description"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="description"
          name="description"
          label="Description"
          fullWidth
          autoComplete="Description"
        />
      </Grid>
    
      
    </Grid>
  </React.Fragment>
  );
}