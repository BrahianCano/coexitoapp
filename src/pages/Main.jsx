import React from 'react';
import { Link } from 'react-router-dom';

const MainComponent = () => {
     return (
          <div className="jumbotron">
               <h1 className="display-4">Bienvenido a coexito app</h1>
               <p className="lead">Guarda tus clientes de manera local y exportalos en una lista de excel.</p>
               <hr className="my-4" />
               <h5 className="mb-5">¿Que deseas hacer?</h5>
               <Link className="btn btn-outline-primary mr-5" to="/coexitoapp/newclient" role="button">Agregar un cliente</Link>
               <Link className="btn btn-secondary" to="/coexitoapp/dashboard" role="button">Gestionar mis clientes</Link>
          </div>
     );
}

export default MainComponent;