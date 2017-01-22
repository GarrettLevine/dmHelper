import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createNpc } from '../utils';

import { Card } from '../../components';

const propTypes = {
// proptypes go here
};

const defaultProps = {
// default props go here
};

export default class NpcCard extends React.Component {
    constructor(props) {
        super(props);
        this.renderNpc = this.renderNpc.bind(this);

        this.state = {
            npc: { ...createNpc() },
        };
    }

    renderNpc() {
      const { npc } = this.state;

      return Object.keys(npc).map(trait => {
        if (trait === 'firstName' ||
        trait === 'lastName' ||
        trait === 'race') return '';

        if (trait === 'highAbility' || trait === 'lowAbility') {
          return (
            <div key={trait} className="ui list">
              <div className="item">
                <div className="content">
                  <div className="header">{trait}</div>
                  <div className="description">{npc[trait].ability} - {npc[trait].desc}</div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div key={trait} className="ui list">
            <div className="item">
              <div className="content">
                <div className="header">{trait}</div>
                <div className="description">{npc[trait]}</div>
              </div>
            </div>
          </div>
        );
      });
    }

    render() {
        const { npc } = this.state;

        return (
            <Card
                className="npcCard"
                header={`${npc.firstName} ${npc.lastName}`}
                subHeader={npc.race}
            >
            {this.renderNpc()}
            <span className="right floated star">
              <i className="star icon"></i>
              Favourite
            </span>
          </Card>
        );
    }
}

NpcCard.propTypes = propTypes;
NpcCard.defaultProps = defaultProps;
