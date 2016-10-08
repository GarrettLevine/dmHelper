import React, { PropTypes } from 'react';
import { Grid, Column, Panel, NavLink } from './components';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function App(props) {
  return (
    <div>
      <Panel
        className="sidebarMenu inverted labeled vertical icon uncover"
        menu
        visible
      >
        <NavLink path="/" text="home" icon="home" />
        <NavLink path="/npc" text="NPC" icon="child" />
        <NavLink path="/story" text="story" icon="book" disabled />
        <NavLink className="sidebarMenu__signIn" path="/signIn" text="Sign In" icon="sign in" />
      </Panel>
      <Grid>
        {props.children}
      </Grid>
    </div>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

