//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import React from 'react';
import { Route } from 'react-router';

//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
import App from '../App.jsx';
import NPCContainer from '../NPC/container.jsx';

//*************************************************
//    R O U T E S
//*************************************************
const Routes = (
  <Route path="/" component={App}>
    <Route path="/npc" component={NPCContainer} />
  </Route>
);

export default Routes;