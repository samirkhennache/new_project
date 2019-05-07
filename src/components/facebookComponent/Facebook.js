import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}
 const FacebookButon =({action})=>(
  <FacebookLogin
  appId="1088597931155576"
  size ="small"
  autoLoad={true}
  textButton={action}
  fields="name,email,picture"
  callback={responseFacebook} >
    {action}
  </FacebookLogin>
)
export {FacebookButon}
