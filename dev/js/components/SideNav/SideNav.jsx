import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

import Panel from '../Panel';
import Icon from '../Icon';
import Button from '../Button';

const propTypes = {
  route: PropTypes.string,
  signIn: PropTypes.bool,
  userId: PropTypes.string,
  toggleSignIn: PropTypes.func,
};

const defaultProps = {
  // Default props go here
};

export default function SideNav(props) {
  const renderNavMenu = () => {
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
          className={`item ${props.route === item.path ? 'active' : ''}`}
          to={item.path}
        >
          <Icon type={item.icon} />
          {item.text}
        </Link>
      );
    });
  }

  const renderSignin = () => {
    const buttonClass = classNames('sidebarMenu__signIn item', {
      active: props.signIn,
    });

    return (
      <div>
        { props.userId ?
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
            handleClick={props.toggleSignIn}
          >
            <Icon type="sign in" />
          </Button>
        }
      </div>
    );
  }

  return (
    <Panel
      className="sidebarMenu inverted labeled vertical icon uncover"
      menu
      visible
    >
      {renderNavMenu()}
      {renderSignin()}
    </Panel>
  );
}

SideNav.propTypes = propTypes;
SideNav.defaultProps = defaultProps;
