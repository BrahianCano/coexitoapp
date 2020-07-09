import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import MainComponent from './pages/Main';
import NewClientComponent from './pages/NewClient';
import DashboardClientsComponent from './pages/DashboardClients';
import UpdateClientComponent from './pages/UpdateClient';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path='/coexitoapp/' component={MainComponent}/>
       <Route exact path='/coexitoapp/newclient' component={NewClientComponent}/>
       <Route exact path='/coexitoapp/dashboard' component={DashboardClientsComponent}/>
       <Route exact path='/coexitoapp/dashboard/:id' component={UpdateClientComponent}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;

//https://www.youtube.com/watch?v=M4JUuuM6qg8