import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import * as fetch from './utils/fetch';

import { Grid, Column, Panel, NavLink, Button, Icon, SideNav } from './components';
import SignIn from './SignIn/SignIn.jsx';

import * as uiActions from './ui-actions';
import * as userActions from './user/user-actions';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  // default props go here
};

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.userActions.getSession();
  }

  render() {
    const { children, app } = this.props;
    return (
      <section className="appContainer">
        <SideNav
          route={this.props.route}
          signIn={this.props.app.signIn}
          userId={this.props.user.id}
          toggleSignIn={() => { this.props.uiActions.setSignin(!this.props.app.signIn); }}
        />
        <div className="contentContainer">
          { app.signIn ? <SignIn /> : null }
          {children}
        </div>
      </section>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

function mapStateToProps(state, ownProps) {
  return {
    route: ownProps.location.pathname,
    app: state.app,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);