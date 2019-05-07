import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderTextField = ({
  label,
  type,
  input,
  ...custom
}) => (
  <TextField
    label={label}
    type={type}
    placeholder={label}
    {...input}
    {...custom}
    margin="normal"
    variant="outlined"
  />
)

export {RenderTextField}