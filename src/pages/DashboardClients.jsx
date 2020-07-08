import React from 'react';
import { Link } from 'react-router-dom'

import ListClientsComponent from '../components/ListClientsComponent'


const DashboardClients = () => {
     return (
          <>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div class="navbar-nav">
                              <Link class="nav-item btn btn-primary" to="/newclient">Agrega un nuevo cliente<span class="sr-only">(current)</span></Link>
                         </div>
                    </div>
               </nav>
               <ListClientsComponent />
          </>
     );
}

export default DashboardClients;