import React, { PropTypes } from 'react';
import { createNpc } from './utils';

import { Card, Grid, Column, Header } from '../components';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default class NpcContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      npc: { ...createNpc() },
    };
  }

  render() {
    const { npc } = this.state;

    return (
      <Grid className="NPCcontainer">
        <Column className="npcContainer__main" columns="seven" >
          <Header
            type="icon"
            icon="child"
            heading="NPC Creator"
            subHeading="discover and save interesting NPCs"
          />
          <Card
            header={`${npc.firstName} ${npc.lastName}`}
            subHeader={npc.race}
          >
            <span className="right floated star">
              <i className="star icon"></i>
              Favourite
            </span>
          </Card>
        </Column>
        <Column columns="four npcContaienr__secondary">
        </Column>
      </Grid>
    );
  }
}

NpcContainer.propTypes = propTypes;
NpcContainer.defaultProps = defaultProps;
