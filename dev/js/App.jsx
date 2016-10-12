import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import { Grid, Column, Panel, NavLink, Button, Icon } from './components';
import SignIn from './SignIn/SignIn.jsx';
import * as appActions from './ui-actions';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  // default props go here
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.renderNavMenu = this.renderNavMenu.bind(this);
    this.renderSignin = this.renderSignin.bind(this);
  }

  renderNavMenu() {
    const navList = [
      {
        path: '/',
        text: 'home',
        icon: 'home',
      },
      {
        path: '/npc',
        text: 'NPC',
        icon: 'child',
      },
      {
        path: '/story',
        text: 'Story',
        icon: 'book',
      },
    ];

    return navList.map(item => {
      return (
        <Link
          key={item.text}
          className={`item ${this.props.route.includes(item.path) ? 'active' : ''}`}
          to={item.path}
        >
          <Icon type={item.icon} />
          {item.text}
        </Link>
      );
    });
  }

  renderSignin() {
    const buttonClass = classNames('sidebarMenu__signIn item', {
      active: this.props.app.signIn,
    });

    return (
      <Button
        className={buttonClass}
        text="Sign In"
        handleClick={()=> {
          this.props.actions.setSignin(!this.props.app.signIn);
        }}
      >
        <Icon type="sign in" />
      </Button>
    );
  }

  render() {
    const { children, app } = this.props;
    return (
      <div className="appContainer">
        <Panel
          className="sidebarMenu inverted labeled vertical icon uncover"
          menu
          visible
        >
          {this.renderNavMenu()}
          {this.renderSignin()}
        </Panel>
        <div className="contentContainer">
          { app.signIn ? <SignIn /> : null }
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

function mapStateToProps(state, ownProps) {
  return {
    route: ownProps.location.pathname,
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);