import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import { Grid, Column, Panel, NavLink, Button, Icon } from './components';
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
    
    this.renderNavMenu = this.renderNavMenu.bind(this);
    this.renderSignin = this.renderSignin.bind(this);
  }

  componentWillMount() {
    this.props.userActions.getSession();
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
          className={`item ${this.props.route === item.path ? 'active' : ''}`}
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
      <div>
        { this.props.user.id ?
          <Button
            className={buttonClass}
            text="Account"
          >
            <Icon type="user" />
          </Button>
          :
          <Button
            className={buttonClass}
            text="Sign In"
            handleClick={()=> {
              this.props.uiActions.setSignin(!this.props.app.signIn);
            }}
          >
            <Icon type="sign in" />
          </Button>
        }
      </div>
    );
  }

  render() {
    const { children, app } = this.props;
    return (
      <section className="appContainer">
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