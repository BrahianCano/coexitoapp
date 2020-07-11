import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo64.png'

import ListClientsComponent from '../components/ListClientsComponent'


const DashboardClients = () => {
     return (
          <>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/">
                         <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                              coexitoApp
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li class="nav-item mr-5 ml-5 mt-1">
                                   <Link className="btn btn-success" to="/newclient" role="button"><i class="fas fa-user-plus mr-1"></i>Agregar un cliente</Link>
                              </li>
                              <li class="nav-item mr-5 ml-5 mt-1">
                                   <HashLink className="btn btn-primary" to="/#donacion"><i class="fas fa-hand-holding-usd mr-1"></i>Hacer una donacion</HashLink>
                              </li>
                         </ul>
                    </div>
               </nav>
               

               <ListClientsComponent />
          </>
     );
}

export default DashboardClients;