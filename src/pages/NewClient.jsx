import React from 'react';
import { Link } from 'react-router-dom';


import FormClientComponent from '../components/FormClientComponent'

const NewClient = () => {
     return ( 
          <div>
               <div className="jumbotron">
               <h1 className="display-4">Agrega un nuevo cliente</h1>
               <p className="lead">Este cliente sera almacenado de manera local, es decir que solo se mostrara en este computador</p>
               <Link className="btn btn-secondary" to="/coexitoapp/dashboard" role="button">Gestionar mis clientes</Link>
          </div>
          <h4 className="text-center m-5">COMPLETA TODOS LOS DATOS DEL FORMULARIO</h4>
               <FormClientComponent />
          </div>
      );
}
 
export default NewClient;