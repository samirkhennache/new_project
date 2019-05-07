import React from 'react';

import { storiesOf } from '@storybook/react';
import TestGenericReduxWrapper from "../../common/helpers/TestGenericReduxWrapper"
import createStore from "../../common/helpers/createStore"
 import LoginForm from "./LoginForm";

const createDecoratedLoginFormStory = (data, dynamicProps, customState) => (
    <TestGenericReduxWrapper
      store={createStore(data, null, true, customState)}
      decoratedElement={LoginForm}
      dynamicDecoratedElementProps={dynamicProps}
    />

);

storiesOf('[start]/[component]/renderTextField', module)
.add('Open', () => {
  const dynamicProps = {
    onClickCancelDeny: () => {},
  };
  const data = { };
  const mockedState = { itemToDeny: 1234 };
  const story = createDecoratedLoginFormStory(data, dynamicProps, mockedState);
  return story;
})