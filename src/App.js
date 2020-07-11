import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './app.css'

import MainComponent from './pages/Main';
import NewClientComponent from './pages/NewClient';
import DashboardClientsComponent from './pages/DashboardClients';
import UpdateClientComponent from './pages/UpdateClient';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path='/' component={MainComponent}/>
       <Route exact path='/newclient' component={NewClientComponent}/>
       <Route exact path='/dashboard' component={DashboardClientsComponent}/>
       <Route exact path='/dashboard/:id' component={UpdateClientComponent}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;

