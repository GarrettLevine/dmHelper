import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Icon } from '../components';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function SignIn(props) {
  return (
    <div className="signIn__container ui card">
      <a
        href="/auth/login/facebook"
      >
        <Button
          type="basic"
          className="blue"
          handleClick={()=>{}}
        >
          <Icon type="facebook" />
          Sign In
        </Button>
      </a>
      <Button
        type="basic"
        className="red"
      >
        <Icon type="google" />
        Sign In
      </Button>
    </div>
  );
}

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;
