/* eslint-disable react/forbid-prop-types */
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"

const TestGenericReduxWrapper = (props) => {
  const {
    store,
    decoratedElement,
    dynamicDecoratedElementProps,
  } = props;
  const DecoratedElement = decoratedElement;
  return (
    <Provider store={store}>
        <Router>
          <DecoratedElement
            {...dynamicDecoratedElementProps}
          />
        </Router>
    </Provider>
  );
};

TestGenericReduxWrapper.propTypes = {
  store: PropTypes.any.isRequired,
  decoratedElement: PropTypes.any.isRequired,
  dynamicProps: PropTypes.any,
  dynamicDecoratedElementProps: PropTypes.any,
};
TestGenericReduxWrapper.defaultProps = {
  dynamicProps: {},
  dynamicDecoratedElementProps: {},
};

export default TestGenericReduxWrapper;