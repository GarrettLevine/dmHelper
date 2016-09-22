import React, { PropTypes } from 'react';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function App(props) {
  return (
    <div>
      <h1 className="ui header red">This is the APP!</h1>
      <a href="http://localhost:8080/auth/login/facebook">Facebook</a>
    </div>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

