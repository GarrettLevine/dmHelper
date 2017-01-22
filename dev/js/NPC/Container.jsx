import React, { PropTypes } from 'react';

import { Grid, Column, Header } from '../components';
import NpcCard from './components/NpcCard.jsx';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default class NpcContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="NPCcontainer">
        <Column className="npcContainer__main" columns="seven" >
          <Header
            type="icon"
            icon="child"
            heading="NPC Creator"
            subHeading="discover and save interesting NPCs"
          />
          <NpcCard />
        </Column>
        <Column columns="four npcContaienr__secondary">
        </Column>
      </Grid>
    );
  }
}

NpcContainer.propTypes = propTypes;
NpcContainer.defaultProps = defaultProps;
