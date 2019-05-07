import React from 'react';
import {FacebookButon} from "./Facebook"

import { storiesOf } from '@storybook/react';

storiesOf('[start]/[component]/FaceBookButton', module)
.add('FaceBook', () => {
  const story = <FacebookButon action ="Register with Facebook"/>
  return story;
})