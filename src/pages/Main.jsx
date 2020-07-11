import React from 'react';
import { Link } from 'react-router-dom';
import DonationComponent from '../components/DonacionComponent'

const MainComponent = () => {
     return (
          <>
               <div className="jumbotron">
                    <h1 className="display-4">Bienvenido a coexitoApp</h1>
                    <p className="lead">Guarda tus clientes de manera local y exportalos en una lista de excel.</p>
                    <hr className="my-4" />
                    <h4 className="mb-3">¿Que deseas hacer?</h4>
                    <Link className="btn btn-success mr-4 mb-2" to="/newclient" role="button"><i class="fas fa-user-plus mr-1"></i>Agregar un cliente</Link>
                    <Link className="btn btn-dark mb-2" to="/dashboard" role="button"> <i class="fas fa-file-csv mr-1"></i> Gestionar mis clientes</Link>
               </div>

               <div id="donacion">
               </div>
               <DonationComponent />

          </>
     );
}

export default MainComponent;