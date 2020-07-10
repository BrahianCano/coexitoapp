import React from 'react';
import { Link } from 'react-router-dom'

import ListClientsComponent from '../components/ListClientsComponent'


const DashboardClients = () => {
     return (
          <>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                              <Link className="nav-item btn btn-primary" to="/newclient">Agrega un nuevo cliente<span className="sr-only">(current)</span></Link>
                         </div>
                    </div>
               </nav>
               <ListClientsComponent />
          </>
     );
}

export default DashboardClients;