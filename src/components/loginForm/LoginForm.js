import React from 'react';
import { Field,reduxForm } from 'redux-form';
import {RenderTextField} from './components/renderTextField';
import Button from '@material-ui/core/Button';
import validate from './validateForm'
import Grid from '@material-ui/core/Grid';


const LoginForm =({handleSubmit})=>(
  <form onSubmit={handleSubmit}>
   <Grid container >
      <Grid item xs={12}>
        <Field name="email" type="text" component={RenderTextField} label="Email" />
      </Grid>
      <Grid item xs={12}>
        <Field name="password" type="password" component={RenderTextField} label="password" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Grid>
    </Grid>
  </form>
)

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm)

