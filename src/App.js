import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import MainComponent from './pages/Main';
import NewClientComponent from './pages/NewClient';
import DashboardClients from './pages/DashboardClients';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path='/coexitoapp/' component={MainComponent}/>
       <Route exact path='/coexitoapp/newclient' component={NewClientComponent}/>
       <Route exact path='/coexitoapp/dashboard' component={DashboardClients}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;

//https://www.youtube.com/watch?v=M4JUuuM6qg8