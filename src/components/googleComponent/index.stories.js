import React from 'react';
import {GoogleButton} from "./Google"

import { storiesOf } from '@storybook/react';

storiesOf('[start]/[component]/GoogleButton', module)
.add('Google', () => {
  const story = <GoogleButton action="Register with Google"/>
  return story;
})