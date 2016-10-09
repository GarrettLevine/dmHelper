import React, { PropTypes } from 'react';

import { Grid, Column, Header } from '../components';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function Container(props) {
  return (
    <Grid className="NPCcontainer">
      <Column className="npcContainer__main" columns="seven" >
        <Header
          type="icon"
          icon="child"
          heading="NPC Creator"
          subHeading="discover and save interesting NPCs"
        />
      </Column>
      <Column columns="four npcContaienr__secondary" >
        test
      </Column>
    </Grid>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
