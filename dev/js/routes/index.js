//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import React from 'react';
import { Route } from 'react-router';

//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
import App from '../App.jsx';
import NpcContainer from '../npc/container.jsx';

//*************************************************
//    R O U T E S
//*************************************************
const Routes = (
  <Route path="/" component={App}>
    <Route path="/npc" component={NpcContainer} />
  </Route>
);

export default Routes;